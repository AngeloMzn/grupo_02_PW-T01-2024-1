'use client';
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface NexAuthSessionProviderProps {
    children: ReactNode;
}
export default function NexAuthSessionProvider({children}: NexAuthSessionProviderProps) {
    return(
        <SessionProvider >{children}</SessionProvider>
    )

}