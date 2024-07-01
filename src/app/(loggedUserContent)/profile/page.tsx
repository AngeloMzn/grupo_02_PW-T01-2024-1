'use client';

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm} from "react-hook-form";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import Spinner from "@/components/spinners/Spinner";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";




const userSchema = z.object({
    name: z.string().nonempty("Nome é obrigatório"),
    email: z.string().email("Email inválido"),
    currentPassword: z.string(),
    newPassword: z.string(),
});

type UserSchema = z.infer<typeof userSchema>;

export default function Registrar() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const { data: session, status } = useSession();

    const { register, handleSubmit, formState: { errors }, reset } = useForm<UserSchema>({
        resolver: zodResolver(userSchema),
    });
    async function getCurrentUser() {
        try {
            const email = session!.user!.email;
            const response = await axios.get("/api/user", {
                params: { email: email }
            });
            reset(response.data);
        } catch (error) {
            console.error("Erro ao buscar usuário:", error);
        }
    }
        useEffect(() => {
            if (session) {
                getCurrentUser()
            }else{
                router.replace("/");
            }
        }, [session]);
    
        async function handleUserData(data: UserSchema) {
            try {
                setLoading(true);
                const response = await axios.put('/api/user', data);
                if (response.status === 200) {
                    toast.success("Perfil atualizado com sucesso!");
                } else {
                    toast.error(response.data.message || "Erro ao atualizar perfil");
                }
            } catch (e) {
                toast.error("Erro no servidor: " + (e as Error).message);
            } finally {
                setLoading(false);
            }
        }
    
        if (status === "loading") {
            return <Spinner loading={true} />;
        }

    return (
        <>
            <div className="relative min-h-screen w-full flex justify-center items-center">
                <Spinner loading={loading} />
                <div className="flex justify-center items-center min-h-screen w-full">
                    <ToastContainer />
                    <section className="p-6 rounded-lg shadow-lg w-full max-w-md container-auth">
                        <header className="home-header pb-4 flex justify-center">
                            <h1 className="text-3xl text-white font-bold">Perfil</h1>
                        </header>
                        <form onSubmit={handleSubmit(handleUserData)}>
                            <div className="mb-4">
                                <label htmlFor="nome" className="block text-light text-white mb-2">Nome completo:</label>
                                <input type="text" {...register('name')} className="form-control w-full px-3 py-2 border border-gray-300 rounded-md" id="nome" />
                                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-light text-white mb-2">Email:</label>
                                <input type="email" {...register('email')} className="form-control w-full px-3 py-2 border border-gray-300 rounded-md" id="email" />
                                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="currentPassword" className="block text-light text-white mb-2">Senha Atual:</label>
                                <input type="password" {...register('currentPassword')} className="form-control w-full px-3 py-2 border border-gray-300 rounded-md" id="currentPassword" />
                                {errors.currentPassword && <p className="text-red-500">{errors.currentPassword.message}</p>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="newPassword" className="block text-light text-white mb-2">Nova Senha:</label>
                                <input type="password" {...register('newPassword')} className="form-control w-full px-3 py-2 border border-gray-300 rounded-md" id="newPassword" />
                                {errors.newPassword && <p className="text-red-500">{errors.newPassword.message}</p>}
                            </div>
                            <div className="flex justify-center mt-4">
                                <button type="submit" className="btn hover:bg-black bg-gray-700 text-white font-bold py-2 px-4 rounded">Salvar</button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </>
    );
}