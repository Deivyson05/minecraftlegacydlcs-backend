import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DlcModule } from './dlc/dlc.module';
import { LinkModule } from './link/link.module';
import { ComentarioModule } from './comentario/comentario.module';

@Module({
  imports: [UserModule, DlcModule, LinkModule, ComentarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
