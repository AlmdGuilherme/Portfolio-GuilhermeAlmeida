import type { FastifyReply, FastifyRequest } from "fastify";
import { AcademicService } from "../Service/AcademicService.js";

export class AcademicController {
  private academicService: AcademicService;

  constructor() {
    this.academicService = new AcademicService();
  }

  async FetchTrainingHistory(request: FastifyRequest, reply: FastifyReply) {
    try {
      const trainingHistory = await this.academicService.fetchTrainingHistory()
      return reply.status(200).send(trainingHistory)
    } catch (error: any) {
      return reply.status(500).send({
        message: error.message || "Erro ao buscar histórico escolar"
      })
    }
  }
}