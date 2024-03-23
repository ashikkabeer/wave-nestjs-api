import { Injectable, ForbiddenException } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Prisma } from '@prisma/client';

@Injectable()
export class MessageService {
  constructor(
    private prisma: PrismaService,
    private config: ConfigService,
    private jwt: JwtService,
  ) {}

  async create(createMessageDto: CreateMessageDto) {
    try {
      const message = await this.prisma.message.create({
        data: {
          content: createMessageDto.content,
          chatId: createMessageDto.chatId,
          userId: createMessageDto.userId,
        },
      });
      return message;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        // * p2002 -> duplication
        if (error.code == 'P2002') {
          throw new ForbiddenException('Credentials Already Taken');
        }
      }
      throw error;
    }
    return 'This action adds a new message';
  }

  findAll() {
    return `This action returns all message`;
  }

  findOne(id: number) {
    return `This action returns a #${id} message`;
  }

  async update(id: number, updateMessageDto: UpdateMessageDto) {
    await this.prisma.message.create({
      data: {
        content: updateMessageDto.content,
        chatId: updateMessageDto.chatId,
        userId: updateMessageDto.userId,
      },
    });
    return `This action updates a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
