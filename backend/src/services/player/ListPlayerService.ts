import prismaClient from "../../prisma";

class ListPlayerService {
  async execute() {
    try {
      const players = await prismaClient.player.findMany({
        select: {
          id: true,
          name: true,
          age: true,
          position: true,
          club: true,
          nationality: true,
          shirtNumber: true,
          createdAt: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      return players;
    } catch (erro) {
      throw new Error("Falha ao buscar jogadores");
    }
  }
}

export { ListPlayerService };