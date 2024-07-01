import db from "../../../../core/db";

interface UserData {
  email: string;
}
export default async function User(data: UserData) {
  console.error(data);
  const user = await db.user.findUnique({
    where: {
      email: data.email,
    },
  });
  return {
    email: user!.email,
    name: user!.name,
  };
}