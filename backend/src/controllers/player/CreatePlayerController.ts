import { Request, Response } from "express";
import { CreatePlayerService } from "../../services/player/CreatePlayerService";

class CreatePlayerController {
  async handle(req: Request, res: Response) {
    const { name, age, position, club, nationality, shirtNumber } = req.body;

    const createPlayer = new CreatePlayerService();

    const player = await createPlayer.execute({
      name,
      age,
      position,
      club,
      nationality,
      shirtNumber,
    });

    return res.status(201).json(player);
  }
}

export { CreatePlayerController };