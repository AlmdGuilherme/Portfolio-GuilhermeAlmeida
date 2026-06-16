import type { FastifyReply, FastifyRequest } from "fastify";
import { ProjectService } from "../Service/ProjectService.js";

export class ProjectController {
  private projectService: ProjectService;

  constructor() {
    this.projectService = new ProjectService();
  }

  async LandingPageProjects(request: FastifyRequest, reply: FastifyReply) {
    try {
      const projects = await this.projectService.landingPageProjects();

      return reply.status(200).send(projects)
    } catch (error: any) {
      return reply.status(500).send({
        message: error.message || "Erro ao buscar projetos para Landing Page."
      })
    }
  }

  async FetchProjectById(request: FastifyRequest, reply: FastifyReply) {
    try {
      const {id} = request.params as {id: number}

      if (isNaN(Number(id))) {
        return reply.status(400).send({message: "ID Inválido"})
      }

      const project = await this.projectService.fetchProjectById(id)

      if (!project) {
        return reply.status(404).send({message: "Projeto não encontrado!"})
      }
      
      return reply.status(200).send(project)
    } catch (error: any) {
      return reply.status(500).send({
        message: error.message || "Erro ao buscar projeto!"
      })
    }
  }
}