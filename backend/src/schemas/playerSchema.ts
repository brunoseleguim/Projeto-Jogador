import { z } from "zod";

export const createPlayerSchema = z.object({
  body: z.object({
    name: z
      .string({ message: "O nome do jogador precisa ser um texto" })
      .min(2, { message: "O nome do jogador precisa ter no mínimo 2 letras" }),

    age: z
      .number({ message: "A idade precisa ser um número inteiro" })
      .int({ message: "A idade deve ser um número inteiro" })
      .min(14, { message: "A idade mínima é 14 anos" }),

    position: z
      .string({ message: "A posição precisa ser um texto" })
      .min(2, { message: "A posição precisa ter no mínimo 2 letras" }),

    club: z
      .string({ message: "O clube precisa ser um texto" })
      .min(2, { message: "O clube precisa ter no mínimo 2 letras" }),

    nationality: z
      .string({ message: "A nacionalidade precisa ser um texto" })
      .min(2, { message: "A nacionalidade precisa ter no mínimo 2 letras" }),

    shirtNumber: z
      .number({ message: "O número da camisa precisa ser um número" })
      .int({ message: "O número da camisa deve ser um número inteiro" })
      .min(1, { message: "O número da camisa deve ser entre 1 e 99" })
      .max(99, { message: "O número da camisa deve ser entre 1 e 99" }),
  }),
});