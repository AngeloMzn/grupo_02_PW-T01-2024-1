'use client';

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import Spinner from "@/components/spinners/Spinner";
import { signIn } from "next-auth/react";

type UserSchema = z.infer<typeof userSchema>

const userSchema = z.object({
    email: z.string().email("Email inválido"),
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

export default function Logar() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit } = useForm<UserSchema>({
        resolver: zodResolver(userSchema),
    });
    async function handleUserData(data: UserSchema) {
        const result = await signIn('credentials', {
              email: data.email,
              password: data.password,
              redirect: false
         });

         console.log(result);

         if(result?.error) {
             toast.error("Usuário ou senha inválidos.");
             return;
         }
        router.replace("/");
    }

    return (
        <div className="relative min-h-screen w-full flex justify-center items-center">
            <Spinner loading={loading} />
            <div className="flex justify-center items-center min-h-screen w-full">
                <ToastContainer />
                <section className="p-6 rounded-lg shadow-lg w-full max-w-md container-auth">
                    <header className="home-header pb-4 flex justify-center">
                        <h1 className="text-3xl text-white font-bold">Login</h1>
                    </header>
                    <form onSubmit={handleSubmit(handleUserData)}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-light text-white mb-2">Email:</label>
                            <input {...register('email')} type="email" className="form-control w-full px-3 py-2 border border-gray-300 rounded-md" id="email" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-light text-white mb-2">Password:</label>
                            <input {...register('password')} type="password" className="form-control w-full px-3 py-2 border border-gray-300 rounded-md" id="password" />
                        </div>
                        <p className="text-white">Ainda não possui conta? <a href="/register" className="text-blue-400 hover:underline">registrar</a></p>
                        <div className="flex justify-center mt-4">
                            <button type="submit" className="btn hover:bg-black bg-gray-700 text-white font-bold py-2 px-4 rounded">Logar</button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
}