import db from "../../../../core/db";
import bcrypt from "bcrypt"

interface userData{
    nome: string;
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

    if (bcrypt.compareSync(oldUser!.password, data.currentPassword)) {
        if(data.newPassword){
            return await db.user.update({
                where: { email: data.email },
                data: {
                    email: data.email,
                    name: data.nome,
                    password: bcrypt.hashSync(data.newPassword, 10),
                }
            });
        }else{
            return await db.user.update({
                where: { email: data.email },
                data: {
                    email: data.email,
                    name: data.nome,
                }
            });
        }
    }else {
        return { error: 'Event not found',  status: 404 };
    }
  
}