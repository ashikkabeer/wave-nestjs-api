import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RoomService {
  constructor(
    private prisma: PrismaService,
    private config: ConfigService,
    private jwt: JwtService,
  ) {}
  async create(createRoomDto: CreateRoomDto) {
    try {
      const room = await this.prisma.chat.create({
        data: {
          title: createRoomDto.title,
          description: createRoomDto.description,
          mentor: createRoomDto.mentor,
          author: createRoomDto.author,
          semester: createRoomDto.semester,
          department: createRoomDto.department,
          subject: createRoomDto.subject,
        },
      });
      return room.id;
    } catch (error) {
      console.log(error);
    }
  }

  findAll() {
    return `This action returns all room`;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} room`;
  // }

  // update(id: number, updateRoomDto: UpdateRoomDto) {
  //   return `This action updates a #${id} room`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} room`;
  // }
}
