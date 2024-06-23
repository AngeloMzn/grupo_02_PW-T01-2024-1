'use client'

import { RingLoader } from "react-spinners"

interface SpinnerProps {
    loading: boolean;
}

export default function Spinner({ loading }: SpinnerProps) {
    return (
        <div className="absolute z-50 flex justify-center items-center">
            <RingLoader color="#000000" size={80} loading={loading} />
        </div>
    )
}