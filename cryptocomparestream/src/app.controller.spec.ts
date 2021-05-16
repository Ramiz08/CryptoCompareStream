import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/common';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
      imports: [HttpModule]
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('root', () => {
    it('AppService should be defined', () => {
      expect(appService).toBeDefined()
    })
  })

  describe('root', () => {
    it('AppController should be defined', () => {
      expect(appController).toBeDefined()
    })
  })

  describe('root', () => {
    it('should return object with more than 1 key', () => {
      expect(appController.getCryptoPrice('btc').subscribe(res => expect(Object.keys.length).toBeGreaterThan(0)))
    })
  })
});
