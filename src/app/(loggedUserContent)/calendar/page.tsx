'use client'
import CalendarComponent from "@/components/Calendar/CalendarComponent";


export default function calendar() {
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