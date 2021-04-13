import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class AppService {
  async getAllUsers(): Promise<object> {
    let data = {}
    data =  (await admin.auth().listUsers());
    return data;  
  }
  async getSingleUser(uid:string): Promise<object> {
    let data = {}
    data =  ((await admin.auth().getUser(uid)).toJSON());
    return data;  
  }
  async disableUser(uid:string): Promise<object> {
    let data = {}
    data =  await admin.auth().updateUser(uid,{
      disabled: true
    });
    return data;  
  }
  async enableUser(uid:string): Promise<object> {
    let data = {}
    data =  await admin.auth().updateUser(uid,{
      disabled: false
    });
    return data;  
  }
  async deleteUser(uid:string): Promise<string> {
    try {
      await admin.auth().deleteUser(uid);
      return 'User deleted successfully';  
      
    } catch (error) {
      return error;
    }
  }
}
