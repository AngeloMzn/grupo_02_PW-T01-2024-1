'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useSession } from 'next-auth/react';
import { z } from "zod";
import Spinner from "@/components/spinners/Spinner";
import { useRouter } from 'next/navigation';
import Email from 'next-auth/providers/email';

const userSchema = z.object({
    id: z.string(),
    name: z.string().nonempty("Nome é obrigatório"),
    email: z.string().email("Email inválido"),
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres").optional(),
});

type UserSchema = z.infer<typeof userSchema>;

export default function Profile() {
    const { data: session, status } = useSession();
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const { register, handleSubmit, formState: { errors }, reset } = useForm<UserSchema>({
        resolver: zodResolver(userSchema),
        defaultValues: { name: '', email: '', password: '' },
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
            if (response.data.status === 200) {
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
                            <label htmlFor="name" className="block text-light text-white mb-2">Nome completo:</label>
                            <input type="text" {...register('name')} className="form-control w-full px-3 py-2 border border-gray-300 rounded-md" id="name" />
                            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-light text-white mb-2">Email:</label>
                            <input type="email" {...register('email')} className="form-control w-full px-3 py-2 border border-gray-300 rounded-md" id="email" />
                            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-light text-white mb-2">Senha (deixe em branco para não alterar):</label>
                            <input type="password" {...register('password')} className="form-control w-full px-3 py-2 border border-gray-300 rounded-md" id="password" />
                            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                        </div>
                        <div className="flex justify-center mt-4">
                            <button type="submit" className="btn hover:bg-black bg-gray-700 text-white font-bold py-2 px-4 rounded">Atualizar</button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
}