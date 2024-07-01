import db from "../../../../core/db";
import bcrypt from "bcrypt"

interface userData{
    name: string;
    email: string;
    currentPassword: string;
    newPassword: string;
}

export default async function updateUserAction(data: userData) {
    
    const oldUser = await db.user.findUnique(
        {   
            where: {email: data.email},
        }
    );

    if (bcrypt.compareSync(data.currentPassword, oldUser!.password)) {
        if(data.newPassword){
            console.error('entrou new password')
            return await db.user.update({
                where: { email: data.email },
                data: {
                    email: data.email,
                    name: data.name,
                    password: bcrypt.hashSync(data.newPassword, 10),
                }
            });
        }else{
            try {
                console.error('entrou sem new password')
                return await db.user.update({
                    where: { email: data.email },
                    data: {
                        email: data.email,
                        name: data.name,
                    }
                });
            }  catch (error) {
                console.error(error);
                return { error: 'Erro ao atualizar usuário',  status: 500 };
            }
        }
    }else {
        return { error: 'Usuario não foi encontrado',  status: 404 };
    }
  
}