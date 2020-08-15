import { Module } from '@nestjs/common';
import { IndexController } from './index/index.controller';
import { IndexService } from './index/index.service';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [ProjectModule],
  controllers: [IndexController],
  providers: [IndexService],
})
export class AppModule {}
