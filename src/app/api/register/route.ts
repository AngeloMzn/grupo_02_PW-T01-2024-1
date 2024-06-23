import { NextResponse } from "next/server";
import registerAction from "./registerAction";

export async function POST(request: Request) {
    try {
        const data = await request.json();
        return NextResponse.json(registerAction(data));
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Erro ao registrar usuário!" }, { status: 500 });
    }
}
