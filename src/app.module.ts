import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma/prisma.service';
import { PrismaModule } from './database/prisma/prisma.module';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';
import { ContactsModule } from './contacts/contacts.module';

@Module({
  imports: [PrismaModule, RolesModule, UsersModule, ContactsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
