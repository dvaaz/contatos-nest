import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { RoleModule } from './roles/roles.module.js';
import { PrismaService } from './database/prisma/prisma.service.js';
import { PrismaModule } from './database/prisma/prisma.module.js';

@Module({
  imports: [RoleModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
