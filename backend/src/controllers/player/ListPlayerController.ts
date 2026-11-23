import { Request, Response } from "express";
import { ListPlayerService } from "../../services/player/ListPlayerService";

class ListPlayerController {
  async handle(req: Request, res: Response) {
    const listPlayer = new ListPlayerService();

    const players = await listPlayer.execute();

    return res.status(200).json(players);
  }
}

export { ListPlayerController };