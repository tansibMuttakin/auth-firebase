import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  //get all users
  @Get('/users')
  getAllUsers(): object {
    return this.appService.getAllUsers();
  }

  // get single user by uid
  @Get('/user/:uid')
  getSingleUser(@Param() params): object {
    return this.appService.getSingleUser(params.uid);
  }

  //disable single user by id
  @Get('/user/disable/:uid')
  disableUser(@Param() params): object {
    return this.appService.disableUser(params.uid);
  }

  //enable single user by id
  @Get('/user/enable/:uid')
  enableUser(@Param() params): object {
    return this.appService.enableUser(params.uid);
  }

  @Get('/user/delete/:uid')
  deleteUser(@Param() params): object {
    return this.appService.deleteUser(params.uid);
  }
}
