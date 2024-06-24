import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default async function logoutAction() {
    const router = useRouter();
    
    await signOut({
        redirect: false,
    });
    router.replace('/');
    return {message: 'Logout realizado com sucesso'};
}