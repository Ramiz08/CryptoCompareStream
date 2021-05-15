import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

/**
   * Prod changes: make a Module to house all future modules/imports. Similar to structure in `./frontend/src/app/material/material.module.ts`
   */

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
