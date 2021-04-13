import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class AppService {
  async getHello(): Promise<object> {
    let data = {}
    data =  (await admin.auth().getUserByEmail("tansib.muhaimin@northsouth.edu")).toJSON();
    return data;  
  }
}
