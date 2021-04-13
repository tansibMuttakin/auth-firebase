import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import './admin-sdk';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule{}
