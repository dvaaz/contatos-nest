import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RolesService } from './roles.service';
import type { RoleDto } from './dto/role.dto';
import { Role } from './entities/role.entity';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Get()
  test() {
    console.log('RolesController test endpoint hit!!');
    return this.rolesService.test();
  }

  @Post('create') 
  create(@Body() data: RoleDto) : Promise<Role> {
    return this.rolesService.create(data);
  }
  
  @Get('find/:id')
  findOne(@Param('id') id: string) : Promise<Role | null> {
    return this.rolesService.findRole({ id: id });
  }

  @Get('all')
  findAll(): Promise<Role[]> {
    return this.rolesService.findRoles({});
  }


  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateRoleDto: RoleDto): Promise<Role> {
    return this.rolesService.update({ 
      where: { id: id }, data: updateRoleDto 
    });
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) : Promise<Role> {
    return this.rolesService.remove({ id: id });
  }
}
