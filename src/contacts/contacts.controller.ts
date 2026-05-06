import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
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

  @Get(':id')
  findOne(@Param('id') id: number): Promise<ContactModel | null> {
    return this.contactsService.findOne(id);
  }

  @Get('all/:email')
  findAll(@Param('email') email: string): Promise<ContactModel[]> {
    return this.contactsService.findAll(email);
  }

  @Get('letter/:letter')
  findByLetter(
    @Param('letter') letter: string,
    // @Query('email') email: string,
  ): Promise<ContactModel[]> {
    return this.contactsService.findByLetter(letter);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    // @Query('userEmail') userEmail: string,
    @Body() data: ContactDto
  ): Promise<ContactModel> {
    return this.contactsService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) : Promise<ContactModel> {
    return this.contactsService.remove(+id);
  }
}
