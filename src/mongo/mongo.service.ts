import { Injectable } from "@nestjs/common";

@Injectable()
export class MongoService{
    async getallNo(){
        return {numbers:[1,2,3,4]}
    }
}