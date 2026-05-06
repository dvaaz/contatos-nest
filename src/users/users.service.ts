import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { PrismaService } from "../database/prisma/prisma.service";
import { RolesService } from "../roles/roles.service";
import { Prisma, Roles, Users } from '../generated/prisma/client.js';
import { ForbiddenException } from "@nestjs/common";
import { UserDto } from "./dto/user.dto";
import { User } from "./entities/user.entity";

  @Injectable()
  export class UsersService {
    constructor(private prisma: PrismaService,
      private rolesService: RolesService
    ) {}

  async test() {
    console.log('UsersService test endpoint hit!!');
  }
  /** Metodo para buscar usuario especifico por email ou id, usando o método findUnique do Prisma Client, que retorna registro único baseado em um filtro de busca. O filtro de busca é passado como argumento para o método, e pode ser baseado em campos únicos do modelo, como email ou id.
   * @param data
   * @return Users | null
   */
  async findUser(data: Prisma.UsersWhereUniqueInput) {
    return this.prisma.users.findUnique({
      where: data,
    });
  }

  /** Metodo para listar todos os usuarios comuns, usando o método findMany do Prisma Client, que retorna uma lista de registros baseado em filtros de busca, ordenação e paginação. O método recebe um objeto de parâmetros que pode incluir opções de paginação (skip, take), filtros de busca (where) e ordenação (orderBy).
   * @param params
   * @return Users[]
   */
  async findUsers(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UsersWhereUniqueInput;
    where?: Prisma.UsersWhereInput;
    orderBy?: Prisma.UsersOrderByWithRelationInput;
  }) {
    // busca id do role de usuario comum
    const role = await this.rolesService.findUser();
    
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.users.findMany({
      skip,
      take,
      cursor,
      where:{
        ...where,
        roleId: role?.id,
      }
      ,
      orderBy,
    });
  }

/**
 * Método para listar usuários admins
 * @param data 
 * @returns 
 */
async findAdmins(params: {
  skip?: number;
  take?: number;
  cursor?: Prisma.UsersWhereUniqueInput;
  where?: Prisma.UsersWhereInput;
  orderBy?: Prisma.UsersOrderByWithRelationInput;
}) {
  // busca id do role de admin
  const role = await this.rolesService.findAdmin();
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.users.findMany({
      skip,
      take,
      cursor,
      where:{
        ...params.where,
        roleId: role?.id,
      }
      ,
      orderBy,
    });
  }

/**
 * Cria usuario comum associando role user a este
 * @param data 
 * @returns 
 */
  async create(data: UserDto) {
    // verifica se o role existe atraves do nome do role
    const role = await this.rolesService.findUser();
    // caso ainda não haja a role de usuario comum, lança um erro
    if (!role) {
      throw new Error(`Role not found`);
    }
    // checagem de dados obrigatórios
    if (!data.name || !data.email) {
      throw new Error('Name and email are required to create a user');
    }
    return this.prisma.users.create({
      data: {
        name: data.name,
        email: data.email,
        roleId: role.id, // associando o roleId ao criar o usuário
      },
    });
  }

  /**
   * Metodo para criacao de admin, associando role admin a este
   * @param data 
   * @returns
   */
  async createAdmin(data: UserDto) {
  const role = await this.rolesService.findAdmin();
  if (!role) {
    throw new Error(`Role not found`);
  }

  // checagem de dados obrigatórios
  if (!data.name || !data.email) {
    throw new Error('Name and email are required to create an admin user');
  }
  return this.prisma.users.create({
    data: {
      name: data.name,
      email: data.email,
      roleId: role.id, // associando o roleId ao criar o usuário
    },
  });
  }

  /**
   * Metodo para atualizar usuario, permitindo atualizar nome do usuario. 
   * @param params 
   * @returns 
   */
  async update(params: { 
    where: Prisma.UsersWhereUniqueInput; data: Prisma.UsersUpdateInput }) {
      const { where, data } = params;
      let updateData: Prisma.UsersUpdateInput = { ...data };
      // se usuario nao existir, lança um erro
      const user = await this.prisma.users.findUnique({
        where,
      });
      if (!user) {
        throw new Error(`User with ID ${where.id} not found`);
      }
      return this.prisma.users.update({
        data: {
          name: data.name,
        },
        where,
      });
    }

    /**
     * Revoga permissao de admin para usuario, atualizando sua role para role de usuario comum
     * @param params 
     * @returns
     */
      async revokeAdmin(params: {
        where: Prisma.UsersWhereUniqueInput; 
      }) {
        const { where } = params;
        // busca role de usuario comum
        const role = await this.rolesService.findUser();
        if (!role) {
          throw new Error(`Role not found`);
        }
        // se usuario nao existir, lança um erro
        const user = await this.prisma.users.findUnique({
          where,
        });
        if (!user) {
          throw new Error(`User with ID ${where.id} not found`);
        }
        return this.prisma.users.update({
          data: {
            roleId: role.id, // associando o roleId ao atualizar o usuário    
          },
          where,
        });
      }
      
        

    /**
     * Delete um usuario por id, não é possivel deletar ADMIN
     * @param id ou email do usuario
     */
    async remove(where: Prisma.UsersWhereUniqueInput) {
      // verifica se o usuario existe
      const user = await this.prisma.users.findUnique({
        where,
      });
      if (!user) {
        throw new Error(`User with ID ${where.id} not found`);
      }
      // verifica role
      const role = await this.rolesService.findAdmin();
      if (user.roleId === role?.id) {
        throw new ForbiddenException(`Cannot delete user with admin role`); // mudar descricao para producao
      }

      return this.prisma.users.delete({
        where,
      });
    }

}