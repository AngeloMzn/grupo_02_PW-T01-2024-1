'use client'
import CalendarComponent from "@/components/Calendar/CalendarComponent";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { use, useEffect } from "react";

export default function calendar() {
    const { data: session, status } = useSession();
    const isLoggedIn = status === "authenticated";
    const router = useRouter();

    useEffect(() => {
        if (!isLoggedIn) {
            router.push('/');
        }
    });
    
    
    return (
        <>
            <div>
                <h1 className="bg-black bg-opacity-25 text-white text-center p-5 text-4xl">Seu calendário</h1>
            </div>
            <div className={"flex justify-center items-center bg-black bg-opacity-50"}>
                <CalendarComponent />
            </div>
        </>
    )
}