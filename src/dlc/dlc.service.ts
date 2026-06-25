import { Injectable } from '@nestjs/common';
import { CreateDlcDto } from './dto/create-dlc.dto';
import { UpdateDlcDto } from './dto/update-dlc.dto';

@Injectable()
export class DlcService {
  create(createDlcDto: CreateDlcDto) {
    return 'This action adds a new dlc';
  }

  findAll() {
    return `This action returns all dlc`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dlc`;
  }

  update(id: number, updateDlcDto: UpdateDlcDto) {
    return `This action updates a #${id} dlc`;
  }

  remove(id: number) {
    return `This action removes a #${id} dlc`;
  }
}
