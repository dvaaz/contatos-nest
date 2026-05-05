import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from '../database/prisma/prisma.service';
import { RolesModule } from '../roles/roles.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
  imports: [RolesModule],
  exports: [UsersService]
})
export class UsersModule {}
