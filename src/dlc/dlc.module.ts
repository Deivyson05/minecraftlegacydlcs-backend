import { Module } from '@nestjs/common';
import { DlcService } from './dlc.service';
import { DlcController } from './dlc.controller';

@Module({
  controllers: [DlcController],
  providers: [DlcService],
})
export class DlcModule {}
