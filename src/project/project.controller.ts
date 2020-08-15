import { Controller, Get, Req, Request } from '@nestjs/common';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  getHello(@Req() request: Request): string {
    console.log(request.url);
    return this.projectService.getHello();
  }
}
