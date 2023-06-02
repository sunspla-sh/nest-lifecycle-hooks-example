import {
  Module,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule
  implements OnModuleInit, OnModuleDestroy, OnApplicationShutdown
{
  onModuleInit() {
    console.log('The module has been initialized (this is from app module)');
  }
  onModuleDestroy() {
    console.log('The module has been destroyed (this is from app module)');
  }

  onApplicationShutdown(signal?: string) {
    console.log('Application shutdown with signal: ', signal);
  }
}
