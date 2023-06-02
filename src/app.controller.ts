import { Controller, Get, OnModuleInit } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController implements OnModuleInit {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // onModuleInit() {
  //   console.log(
  //     'The module has been initialized (this is from app controller)',
  //   );
  // }

  async onModuleInit() {
    await new Promise<void>((resolve, reject) =>
      setTimeout(() => {
        console.log(
          'ASYNC: The module has been initialized (this is from app controller)',
        );
        resolve();
      }, 3000),
    );
  }
}
