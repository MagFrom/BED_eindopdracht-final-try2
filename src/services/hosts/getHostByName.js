import { PrismaClient } from "@prisma/client";

const getHostByName = async (name) => {
  try {
    const prisma = new PrismaClient();
    const hosts = await prisma.host.findMany({
      where: { name },
    });

    // Return the first match if you only need one host
    return hosts.length > 0 ? hosts[0] : null;
  } catch (error) {
    throw new Error("Database failed / host not found.");
  } // finally {
  // await prisma.$disconnect(); // Properly close the Prisma client
  // }
};

export default getHostByName;
