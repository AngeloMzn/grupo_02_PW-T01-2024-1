import prisma from "../../../../core/db";
import bcrypt from "bcrypt";
interface UserData {
    name: string;
    email: string;
    password: string;
}

export default async function registerAction(data: UserData) {
    const userExists = await prisma.user.findUnique({
        where: {
            email: data.email
        }
    });
    if (userExists) {
        return {
            status: 400,
            message: "Usuário já cadastrado."
        };
    }
    try {
        const hashedPassword = await bcrypt.hashSync(data.password, 10); 
        const user = await prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: hashedPassword, 
                address: {
                    create: {
                        street: "Rua 1",
                        city: "Cidade 1",
                        state: "Estado 1",
                        cep: "12345678",
                        number: "123",
                        neighborhood: "Bairro 1",
                        country: "País 1"
                    }
                }
            }
        });

        return {
            status: 200,
            message: "Usuário registrado com sucesso.",
            data: user
        };
    } catch (err: any) {
        console.error(err);
        throw new Error("Erro ao registrar usuário: " + err.message);
    }
}
