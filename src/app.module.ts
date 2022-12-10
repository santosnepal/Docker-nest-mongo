import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './config/configuration';
import { MongoModule } from './mongo/mongo.module';

@Module({
  imports: [MongoModule,
    ConfigModule.forRoot({
    load:[configuration],
    isGlobal: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
