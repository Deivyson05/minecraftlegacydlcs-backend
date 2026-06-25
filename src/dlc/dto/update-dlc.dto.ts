import { PartialType } from '@nestjs/mapped-types';
import { CreateDlcDto } from './create-dlc.dto';

export class UpdateDlcDto extends PartialType(CreateDlcDto) {}
