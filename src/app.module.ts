/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PhotoModule } from './photo/photo.module';
import { EnvModule } from './env/env.module';

@Module({
  imports: [AuthModule, UserModule, PhotoModule, EnvModule,],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
