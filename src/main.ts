import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';
import { readFileSync } from 'fs';
import * as path from 'path';

const SwaggerSetting = (
  app: INestApplication,
  url: string,
  relativePath: string,
) => {
  const docs = readFileSync(path.join(__dirname, relativePath), 'utf8');
  SwaggerModule.setup(url, app, JSON.parse(docs));
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  SwaggerSetting(app, 'api', '../../swagger.json');
  await app.listen(3000);
}
bootstrap();
