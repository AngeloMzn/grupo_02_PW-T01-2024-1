import db from "../../../../core/db";

interface UserData {
  email: string;
  password: string;
}
export default async function logar(data: UserData) {
  const user = await db.user.findUnique({
    where: {
      email: data.email,
    },
  });
  return user;
}