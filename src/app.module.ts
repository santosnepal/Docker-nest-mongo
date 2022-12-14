import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './config/configuration';
import { MongoModule } from './mongo/mongo.module';
import { LoggingInterceptor } from './utils/interceptor/logging.interceptor';
import { TransformInterceptor } from './utils/interceptor/transform.interceptor';

@Module({
  imports: [
    MongoModule,
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor },
    { provide: APP_INTERCEPTOR, useClass: TransformInterceptor },
    AppService,
  ],
})
export class AppModule {}
