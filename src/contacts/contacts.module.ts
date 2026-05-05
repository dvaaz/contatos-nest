import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { PrismaService } from '../database/prisma/prisma.service';
import { UsersService } from '../users/users.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [ContactsController],
  providers: [ContactsService, PrismaService],
  imports: [UsersModule],
  exports: [ContactsService]
})
export class ContactsModule {}
