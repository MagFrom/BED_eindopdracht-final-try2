import { PrismaClient } from "@prisma/client";

const deleteHost = async (id) => {
  const prisma = new PrismaClient();
  try {
    console.log("Attempting to delete host with id:", id);

    // Check if the host with the specified id exists
    const hostExists = await prisma.host.findUnique({
      where: { id },
    });

    // If the host does not exist, return null or an appropriate response
    if (!hostExists) {
      console.log(`Host with id ${id} does not exist.`);
      return null;
    }

    // Proceed to delete if the host exists
    const host = await prisma.host.delete({
      where: { id },
    });
    return host ? id : null;
  } catch (error) {
    console.error("Error during host deletion:", error);
    return null;
  } finally {
    await prisma.$disconnect();
  }
};

export default deleteHost;
