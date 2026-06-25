import { Injectable } from '@nestjs/common';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';
import { prisma } from '../../lib/prisma';

@Injectable()
export class LinkService {
  async create(createLinkDto: CreateLinkDto) {
    await prisma.link.create({ data: createLinkDto });
    return 'This action adds a new link';
  }

  async findAll() {
    const links = prisma.link.findMany();
    return `This action returns all link`;
  }

  async findOne(userId: string) {
    const link = prisma.link.findMany({ where: { userId } });
    return `This action returns a #${userId} link`;
  }

  async update(id: string, updateLinkDto: UpdateLinkDto) {
    await prisma.link.update({ where: { id }, data: updateLinkDto });
    return `This action updates a #${id} link`;
  }

  async remove(id: string) {
    await prisma.link.delete({ where: { id } });
    return `This action removes a #${id} link`;
  }
}
