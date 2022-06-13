import { Controller, Get } from '@overnightjs/core';
import { NextFunction, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { Logger } from 'tslog';

@Controller('hello')
export class HelloWorldController {
  @Get('/')
  private getHello = (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Response<{ ok: boolean; message: string }> | undefined => {
    try {
      const response = { ok: true, message: 'helloWorld' };
      return res.send(response);
    } catch (e) {
      return res.status(500).send({ ok: false, message: e.message });
    }
  };

  @Get('sindrome')
  private getTest = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<{ ok: boolean; message: string; data: Record<number, any> }>> | undefined => {
    try {
      const prisma = new PrismaClient();
      const sindrome = await prisma.sindrome.findUnique({ where: { id_sindrome: 2 } });
      const response = { ok: true, message: 'Success', data: { ...sindrome } };
      return res.send(response);
    } catch (e) {
      return res.status(500).send({ ok: false, message: e.message });
    }
  };
}
