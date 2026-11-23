// Importa os tipos Request e Response (para tipagem das requisições e respostas)
// e o Router (para criar rotas separadas no Express)
import { Request, Response, Router } from "express";

// Importa o controller responsável por lidar com a criação de usuários
import {CreateUserController} from "./controllers/User/CreateUserController";

import { AuthUserController } from "./controllers/user/AuthUserController";
 
// Importa o middleware de validação com Zod
import { validateSchema } from "./middlewares/validateSchema";

// Importa o schema que define as regras de validação para criação de usuário
import { createUserSchema, authUserSchema } from "./schemas/userSchema";

import { isAuthenticated } from "./middlewares/isAuthenticated";
import { DetailUserController } from "./controllers/User/DetailUserController";

import { isAdmin } from "./middlewares/isAdmin";
import { createPlayerSchema } from "./schemas/playerSchema";
import { CreatePlayerController } from "./controllers/player/CreatePlayerController";

import { ListPlayerController } from "./controllers/player/ListPlayerController";
// Cria uma instância de roteador do Express
const router = Router();

// Define uma rota POST para o endpoint "/users"
router.post(
    "/users",

    // Middleware que valida os dados da requisição (body, query e params)
    // antes de chegar no controller
    validateSchema(createUserSchema),

    // Controller responsável por processar a requisição
    // e executar a lógica de criação do usuário
    new CreateUserController().handle
);

// Define uma rota do tipo POST no caminho "/session"
// Essa rota será usada para autenticação (login do usuário)
router.post(
  "/session", // endpoint da rota (ex: http://localhost:3000/session)

  // Middleware que valida os dados enviados no body da requisição
  // Ele usa um schema (authUserSchema) para garantir que email e senha estão corretos
  validateSchema(authUserSchema),

  // Controller responsável por processar a requisição
  // Aqui ele executa o método handle, que faz a autenticação do usuário
  new AuthUserController().handle
);


router.get("/me", // Endpoint para obter dados do usuário autenticado
  isAuthenticated, // Middleware que verifica se o usuário está autenticado (token válido)
  new DetailUserController().handle // Controller que busca e retorna os dados do usuário
);

router.post(
  "/players",
  isAuthenticated,
  isAdmin,
  validateSchema(createPlayerSchema),
  new CreatePlayerController().handle
);

router.get(
  "/players",
  isAuthenticated,
  new ListPlayerController().handle
);

// Exporta o router para ser utilizado em outros arquivos (ex: no app principal)
export { router };