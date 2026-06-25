import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DlcService } from './dlc.service';
import { CreateDlcDto } from './dto/create-dlc.dto';
import { UpdateDlcDto } from './dto/update-dlc.dto';

@Controller('dlc')
export class DlcController {
  constructor(private readonly dlcService: DlcService) {}

  @Post()
  create(@Body() createDlcDto: CreateDlcDto) {
    return this.dlcService.create(createDlcDto);
  }

  @Get()
  findAll() {
    return this.dlcService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dlcService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDlcDto: UpdateDlcDto) {
    return this.dlcService.update(+id, updateDlcDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dlcService.remove(+id);
  }
}
