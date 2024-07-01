import { NextResponse } from "next/server";
import userAction from "./createUserAction";
import updateUserAction from "./updateUserAction";

export async function GET(request: { url: string | URL; }) {
    try {
        const { searchParams } = new URL(request.url);
        const email = searchParams.get('email');
        const data = await userAction({ email });
        return NextResponse.json(data);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Erro ao processar a solicitação." }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        const data = updateUserAction(await request.json());
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Erro ao atualizar usuário' }, { status: 500 });
    }
}
