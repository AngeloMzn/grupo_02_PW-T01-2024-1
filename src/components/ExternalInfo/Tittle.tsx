import React from 'react';

interface TittleProps {
    description: string;
}

export default function Tittle({ description }: TittleProps) {
    return (
        <div className='bg-black bg-opacity-50  p-5'>
            <h1 className="text-white text-center text-4xl">{description}</h1>
        </div>
    );
}
