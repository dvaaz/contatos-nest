import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RolesService } from './roles.service.js';
import type { RolesDto } from './dto/roles.dto.js';


@Controller('roles')
export class RolesController {
    constructor(private rolesService: RolesService) { }

    @Post()
      create(@Body() data: RolesDto) {
        return this.rolesService.create(data);
      }
    
      @Get()
      findAll() {
        return this.rolesService.findAll();
      }
    
      @Get(':id')
      findOne(@Param('id') id: string) {
        return this.rolesService.findOne(id);
      }
    
      @Patch(':id')
      update(@Param('id') id: string, @Body() data: RolesDto) {
        return this.rolesService.update(id, data);
      }
    
      @Delete(':id')
      remove(@Param('id') id: string) {
        return this.rolesService.remove(id);
      }
    }
    