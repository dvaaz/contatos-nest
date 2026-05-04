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
  
  @Get('find/:name')
  findOne(@Param('name') name: string) : Promise<Role | null> {
    return this.rolesService.findRole({ name: name });
  }

  @Get('all')
  findAll(): Promise<Role[]> {
    return this.rolesService.findRoles({});
  }


  @Patch('update/:name')
  update(@Param('name') name: string, @Body() updateRoleDto: RoleDto): Promise<Role> {
    return this.rolesService.update({ 
      where: { name: name }, data: updateRoleDto 
    });
  }

  @Delete('delete/:name')
  remove(@Param('name') name: string) : Promise<Role> {
    return this.rolesService.remove({ name: name });
  }
}
