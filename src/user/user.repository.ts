import { prisma } from "../../lib/prisma";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { IUserRepository } from "./iUser.repository";

export class UserRepository implements IUserRepository {
    async create(createUserDto: CreateUserDto) {
        await prisma.user.create({ data: createUserDto });
    }

    async findAll() {
        const result = prisma.user.findMany();
        return result;
    }

    async findOne(id: string) {
        const result = await prisma.user.findUnique({ where: { id } });
        return result;
    }

    async update(id: string, updateUserDto: UpdateUserDto) {
        await prisma.user.update({ where: { id }, data: updateUserDto });
    }

    async remove(id: string) {
        await prisma.user.delete({ where: { id } });
    }
}