import { Injectable } from '@nestjs/common';
import { ContactDto } from './dto/contact.dto';
import { PrismaService } from '../database/prisma/prisma.service';
import { Prisma, Users, Contacts } from '../generated/prisma/client.js';
import { User } from '../users/entities/user.entity';

@Injectable()
export class ContactsService {
  constructor(private prisma: PrismaService) {}

  /**
   * Metodo para gerar o código
   * @param email 
   * @returns 
   */
  findUserByEmail(email: string): Promise<Users | null> {
    return this.prisma.users.findUnique({
      where: {
        email: email,
      },
    });
  }

  /**
   * Cria contato de um usuario
   * @param data 
   * @returns 
   */
  async create(data: ContactDto): Promise<Contacts> {
    // checagem de usuario
    if (!data.userEmail) {
      throw new Error('User email is required');
    }
   if (!data.name || !data.email || !data.phone) {
      throw new Error('Name, email and phone are required to create a contact');
    }
    // busca o usuário pelo email fornecido
    const user = await this.findUserByEmail(data.userEmail);
    if (!user) {
      throw new Error('User not found');
    }

    // criando o contato associado ao usuário através do userId
     return this.prisma.contacts.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        userId: user.id, // associando o contato ao usuário através do userId
      },
    });
  }

  /**
   * Exibir todos os contatos do usuario
   * @param email 
   * @returns 
   */
  async findAll(email: string): Promise<Contacts[]> {
    const user = await this.findUserByEmail(email);

    if (!user) {
      throw new Error('User not found');
      }
    return this.prisma.contacts.findMany({
      where: {
        userId: user.id, // buscando os contatos associados ao usuário através do userId
      },
    });
  }

  /**
   * Exibir todos os contatos de um usuario que iniciam pela letra inputed
   * @param id 
   * @returns 
   */
  async findByLetter(email: string, nameStartsWith: string): Promise<Contacts[]> {
    const user = await this.findUserByEmail(email);
    if (!user) {
      throw new Error('User not found');
    }; 

    return this.prisma.contacts.findMany({
      where: {
        userId: user.id,
        name: {
          startsWith: nameStartsWith,
        },
      },
    });
  }

  /**
   * Busca contato por id, com checagem de que o contato seja do usuário
   * @param id 
   */
  async findOne(id: number, email: string): Promise<Contacts | null> {
    const user = await this.findUserByEmail(email);
    if (!user) {
      throw new Error('User not found');
    }; 

    return this.prisma.contacts.findFirst({
      where: {
        id: id,
        userId: user.id, // garantindo que o contato seja do usuário
      },
    });
  }

  /**
   * Update no contato de um usuario
   * @param id 
   * @param data 
   * @returns 
   */
  async update(id: number, userEmail: string, data: ContactDto) {
    
    const user = await this.findUserByEmail(userEmail);
    if (!user) {
      throw new Error('User not found');
    }; 
      const contact = await this.prisma.contacts.findFirst({
        where: {
          id: id,
          userId: user.id, // garantindo que o contato seja do usuário
        },
      });

      if (!contact) {
        throw new Error(`Contact with ID ${id} not found for this user`);
      }

      if (user.id !== contact.userId) {
        throw new Error(`Contact with ID ${id} does not belong to the user`);
      }
      return this.prisma.contacts.update({
        where: {
          id: id,
        },
        data: {
          name: data.name,
          // email: data.email,
          phone: data.phone,
        },
      });

  }

  async remove(id: number, userEmail: string) {
    const user = await this.findUserByEmail(userEmail);
    if (!user) {
      throw new Error('User not found');
    }

    const contact = await this.prisma.contacts.findFirst({
      where: {
        id: id,
        userId: user.id,
      },
    });

    if (!contact) {
      throw new Error(`Contact with ID ${id} not found for this user`);
    }

    return this.prisma.contacts.delete({
      where: {
        id: id,
      },
    });
  }
}