'use server'

import prisma from "../../../../core/db"


interface UserData {
    name: string;
    email: string;
    password: string;
    // address: {
    //   street: string;
    //   city: string;
    //   state: string;
    //   cep: string;
    //   number: string;
    //   neighborhood: string;
    //   country: string;
    // };
  }


export default async function registerAction(data: UserData) {

    try {
        const user = await prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: data.password,
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
        })
        return "Usuário registrado com sucesso."
    }catch(err) {
        console.error(err)
        return "Erro ao registrar usuário."
    }
}