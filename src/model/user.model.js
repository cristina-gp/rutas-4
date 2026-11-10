import prisma from "../db.js";


export function getUserModel() {
return ("ok")
}

export async function createUserModel(email, username, name) {
  try {
    const user = await prisma.user.create({
      data: {  email, username, name },
    });
    return user;
  } catch (e) {
    console.log(e);
    throw new Error("todo mal");
  }
}