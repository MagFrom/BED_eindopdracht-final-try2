import { PrismaClient } from "@prisma/client";

const viewUsers = async () => {
  try {
    const prisma = new PrismaClient();
    const users = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        name: true,
        email: true,
        phoneNumber: true,
        profilePicture: true,
        // Exclude password here
      },
    });
    return users;
  } catch (error) {
    return null;
  }
};
export default viewUsers;
