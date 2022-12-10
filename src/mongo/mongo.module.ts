import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongocontroller } from './mongo.controller';
import { MongoService } from './mongo.service';

@Module({
    imports:[
        MongooseModule.forRootAsync({
            imports:[ConfigModule],
            useFactory: async (configService:ConfigService)=>(
                {   
               uri: `mongodb://${configService.get('mongo.username')}:${configService.get('mongo.password')}@${configService.get('mongo.host')}:${configService.get('mongo.port')}/${configService.get('mongo.database')}`,
            }),
            inject: [ConfigService],
        }),
    ],
    providers:[MongoService],
    exports:[MongoService],
    controllers:[Mongocontroller]
})
export class MongoModule {}
