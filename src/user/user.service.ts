import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}
  async create(createUserDto: CreateUserDto) {
    this.userRepository.create(createUserDto);
    return 'Usuário criado com sucesso!';
  }

  async findAll() {
    const users = await this.userRepository.findAll();
    return users;
  }

  async findOne(id: string) {
    const result = await this.userRepository.findOne(id);
    return result;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    await this.userRepository.update(id, updateUserDto);
    return `This action updates a #${id} user`;
  }

  async remove(id: string) {
    await this.userRepository.remove(id);
    return `Usuário #${id} deletado com sucesso!`;
  }
}
