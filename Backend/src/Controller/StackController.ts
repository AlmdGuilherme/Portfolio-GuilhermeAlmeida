import type { FastifyReply, FastifyRequest } from "fastify";
import { StackService } from "../Service/StackService.js"

export class StackController {
  private stackService: StackService;

  constructor() {
    this.stackService = new StackService();
  }

  async FetchStack(request: FastifyRequest, reply: FastifyReply) {
    try {
      const stack = await this.stackService.FetchStack()
      return reply.status(200).send(stack)
    } catch (error: any) {
      return reply.status(500).send({
        message: error.message || "Erro ao buscar stack de tecnologias"
      })
    }
  }
}