import React from "react";


interface ContactProps{
    description: string,
    children: React.ReactNode,
}

export default function Contact({description, children}: ContactProps) {

    return (
        <>
            <div className="flex items-center gap-2">
                {children}
                <span>{description}</span>
            </div>
        </>
    );

}