import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import type { UserDto } from './dto/user.dto';
import { Users as UserModel } from '../generated/prisma/client.js';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /**
   * Cria um usuario comum
   * @param data
   * @returns 
   */
  @Post()
  create(@Body() data: UserDto) : Promise<UserModel> {
    return this.usersService.create(data);
  }

  /**
   * Cria um usuario admin
   * @returns
   */
  // Alterar futuramente para que seja criado um admin apenas por outro admin
  @Post('admin')
  createAdmin(@Body() data: UserDto) : Promise<UserModel> {
    return this.usersService.createAdmin(data);
  }


  /**
   * Controller para listar usuarios comuns
   * @returns
   */
  @Get('users')
  findAll(): Promise<UserModel[]> {
    return this.usersService.findUsers({});
  }

  /**
   * Controller para listar usuarios admins
   * @returns 
   */
  @Get('admins')
  findAdmins() {
    return this.usersService.findAdmins({});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findUser({ id: +id });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UserDto): Promise<UserModel> {
    return this.usersService.update({
      where: { id: +id }, // + converte string para number e vice versa, nesse caso o id seja passado como string
      data
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove({id:+id});
  }
}
