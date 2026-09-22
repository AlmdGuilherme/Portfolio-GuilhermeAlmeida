import fastify from 'fastify'
import fastifyJwt from '@fastify/jwt'
import fastifyCors from '@fastify/cors'
import { ProjectController } from './Controller/ProjectController.js'
import { StackController } from './Controller/StackController.js'
import { AcademicController } from './Controller/AcademicController.js'

class App {
  public app: fastify.FastifyInstance

  constructor() {
    this.app = fastify({ logger: true })
    this.config()
    this.routes()
  }

  private config() {
    this.app.register(fastifyJwt, {
      secret: process.env.JWT_SECRET || 'fallback_secret_apenas_para_dev'
    })

    this.app.register(fastifyCors, {
      origin: "*"
    })
  }

  async listen(port: number) {
    try {
      await this.app.listen({ port: port, host: '0.0.0.0' })
      console.log(`O servidor está rodando na porta: ${port}`)
    } catch (error: any) {
      this.app.log.error('Erro - ', error)
      process.exit(1)
    }
  }

  public getInstance() {
    return this.app;
  }

  routes() {
    const projectController = new ProjectController();
    const stackController = new StackController();
    const academicController = new AcademicController();

    this.app.get('/', async (request, reply) => {
      return reply.status(200).send({
        status: "online",
        message: "API do Portfólio rodando com Fastify + TypeScript!",
        timestamp: new Date().toISOString()
      })
    })

    this.app.get('/projects-background', async (request, reply) => {
      await projectController.FetchProjects(request, reply)
    })

    this.app.get('/projetos/:id', async (request, reply) => {
      await projectController.FetchProjectById(request, reply)
    })

    this.app.get('/my-stack', async (request, reply) => {
      await stackController.FetchStack(request, reply)
    })

    this.app.get('/academic-background', async (request, reply) => {
      await academicController.FetchTrainingHistory(request, reply)
    })
  }
}

export { App }