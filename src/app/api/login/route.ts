import { sign } from "crypto";
import { NextResponse } from "next/server";
import loginAction from "./loginAction";


export async function POST(request: Request) {
    try {
        const data = await loginAction(await request.json());
        return NextResponse.json(data);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Erro ao processar a solicitação." }, { status: 500 });
    }
}
