import { Controller, Get } from "@nestjs/common";
import { MongoService } from "./mongo.service";

@Controller('numbers')
export class Mongocontroller{
    constructor(
        private readonly mongoService:MongoService
    ){}
    @Get()
    async getAllNumbers(){
        return await this.mongoService.getallNo()
    }
}