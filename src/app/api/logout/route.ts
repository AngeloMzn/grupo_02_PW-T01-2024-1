import { sign } from "crypto";
import { NextResponse } from "next/server";
import logoutAction from "./logoutAction";

export async function POST(request: Request) {
    try {
        const data = await logoutAction();
        return NextResponse.json(data);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Erro ao processar a solicitação." }, { status: 500 });
    }
}
