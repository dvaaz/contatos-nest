import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RolesService } from './roles.service';
import type { RoleDto } from './dto/role.dto';
import { Roles as RoleModel } from '../generated/prisma/client.js';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Get()
  test() {
    console.log('RolesController test endpoint hit!!');
    return this.rolesService.test();
  }

  @Post('create') 
  create(@Body() data: RoleDto) : Promise<RoleModel> {
    return this.rolesService.create(data);
  }
  
  @Get('find/:name')
  findOne(@Param('name') name: string) : Promise<RoleModel   | null> {
    return this.rolesService.findRole({ name: name });
  }

  @Get('all')
  findAll(): Promise<RoleModel[]> {
    return this.rolesService.findRoles({});
  }


  @Patch('update/:name')
  update(@Param('name') name: string, @Body() data: RoleDto): Promise<RoleModel> {
    return this.rolesService.update({ 
      where: { name: name }, data: data 
    });
  }

  @Delete('delete/:name')
  remove(@Param('name') name: string) : Promise<RoleModel> {
    return this.rolesService.remove({ name: name });
  }
}
