import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /**
   * Starts listening for shutdown hooks - this is opt-in because the hooks consume system resources by creating listeners.
   * When running multiple nest apps in a single node process (e.g., when running parallel tests with jest), node may complain
   * about excessive listener processes. For this reason, shutdown hooks are disabled by default.
   *
   */
  app.enableShutdownHooks();
  await app.listen(3000);
}
bootstrap();
