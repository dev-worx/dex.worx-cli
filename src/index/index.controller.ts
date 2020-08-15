import { Controller, Get, Req, Request } from '@nestjs/common';
import { IndexService } from './index.service';

@Controller()
export class IndexController {
  constructor(private readonly indexService: IndexService) {}

  @Get()
  getHello(@Req() request: Request): string {
    console.log(request.url);
    return this.indexService.getHello();
  }
}
