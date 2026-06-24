import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { prisma } from '../../lib/prisma';

@Injectable()
export class UserService {
  async create(createUserDto: CreateUserDto) {
    const user = await prisma.user.create({ data: createUserDto });
    return 'Usuário criado com sucesso!';
  }

  findAll() {
    const users = prisma.user.findMany();
    return users;
  }

  async findOne(id: string) {
    const result = await prisma.user.findUnique({ where: { id } });
    return result;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    await prisma.user.update({ where: { id }, data: updateUserDto });
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    prisma.user.delete({ where: { id } });
    return `Usuário #${id} deletado com sucesso!`;
  }
}
