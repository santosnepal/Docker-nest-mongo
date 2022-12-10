import { Injectable } from '@nestjs/common';

@Injectable()
export class MongoService {
  async getallNo() {
    return { data: { hello: 'i am santosh' } };
    // return new Error();
  }
}
