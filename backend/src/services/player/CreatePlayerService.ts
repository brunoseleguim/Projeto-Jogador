import prismaClient from "../../prisma";

interface CreatePlayerProps {
  name: string;
  age: number;
  position: string;
  club: string;
  nationality: string;
  shirtNumber: number;
}

class CreatePlayerService {
  async execute({
    name,
    age,
    position,
    club,
    nationality,
    shirtNumber,
  }: CreatePlayerProps) {
    try {
      const player = await prismaClient.player.create({
        data: {
          name,
          age,
          position,
          club,
          nationality,
          shirtNumber,
        },
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
      });

      return player;
    } catch (erro) {
      throw new Error("Falha ao cadastrar Jogador");
    }
  }
}

export { CreatePlayerService };