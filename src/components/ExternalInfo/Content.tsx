import React from 'react';

interface ContentProps {
    children: React.ReactNode;
}

export default function Content({ children }: ContentProps) {
    return (
        <div className="bg-white bg-opacity-50 flex items-center justify-center h-64">
            <div className="text-lg text-center">
                {children}
            </div>
        </div>
    );
}
