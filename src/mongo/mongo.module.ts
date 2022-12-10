import { Logger, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

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
})
export class MongoModule {}
