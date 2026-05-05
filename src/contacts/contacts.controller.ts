import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import type { ContactDto } from './dto/contact.dto';
import { Contacts as ContactModel } from '../generated/prisma/client.js';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  create(@Body() data: ContactDto): Promise<ContactModel> {
    return this.contactsService.create(data);
  }

  @Get(':id/:email')
  findOne(@Param('id') id: number, @Param('email') email: string): Promise<ContactModel | null> {
    return this.contactsService.findOne(id, email);
  }

  @Get('all/:email')
  findAll(@Param('email') email: string): Promise<ContactModel[]> {
    return this.contactsService.findAll(email);
  }

  @Get('letter/:name/:email')
  findByLetter(@Param('name') name: string, @Param('email') email: string): Promise<ContactModel[]> {
    return this.contactsService.findByLetter(email, name);
  }

  @Patch(':id/:userEmail')
  update(@Param('id') id: string, @Param('userEmail') userEmail: string, @Body() data: ContactDto) {
    return this.contactsService.update(+id, userEmail, data);
  }

  @Delete(':id/:userEmail')
  remove(@Param('id') id: string, @Param('userEmail') userEmail: string) {
    return this.contactsService.remove(+id, userEmail);
  }
}
