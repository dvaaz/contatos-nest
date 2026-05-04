import { Injectable } from '@nestjs/common';
import type { RoleDto } from './dto/role.dto';
import { PrismaService } from '../database/prisma/prisma.service.js';
import { Prisma, Roles } from '../generated/prisma/client.js';

@Injectable()
export class RolesService {
  constructor(private prisma: PrismaService) {}

  async test() {
        console.log('Prisma Instance:', this.prisma);
        console.log('Roles Model:', this.prisma?.roles); // Veja se isso imprime 'undefined'
  }

  /**
   *  Metodo para buscar um role específico, usando o método findUnique do Prisma Client, que retorna registro único baseado em um filtro de busca.
   * @param roleWhereUniqueInput
   * @returns Roles | null
   */
async findRole(RolesWhereUniqueInput: Prisma.RolesWhereUniqueInput): Promise<Roles | null> {
  return this.prisma.roles.findUnique({
    where: RolesWhereUniqueInput,
  });
}

/**
 * Listar todas os roles, usando o método findMany do Prisma Client, que retorna uma lista de registros baseado em filtros de busca, ordenação e paginação.
 * @returns Roles[]
 */
async findRoles(params: {
  skip?: number;
  take?: number;
  cursor?: Prisma.RolesWhereUniqueInput;
  where?: Prisma.RolesWhereInput;
  orderBy?: Prisma.RolesOrderByWithRelationInput;
}): Promise<Roles[]> {
  const { skip, take, cursor, where, orderBy } = params;
  return this.prisma.roles.findMany({
    skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: RoleDto) {
    return this.prisma.roles.create({
      data,
    });
  }
  
  async update (params: { 
    where: Prisma.RolesWhereUniqueInput; data: Prisma.RolesUpdateInput }): Promise<Roles> {
    const { where, data } = params;
    return this.prisma.roles.update({
      data,
      where,
    });
  }

  async remove(where: Prisma.RolesWhereUniqueInput): Promise<Roles> {
    return this.prisma.roles.delete({
      where,
    });
  }
}
