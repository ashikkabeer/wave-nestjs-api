import { Injectable } from '@nestjs/common';
import { CreatePostDto, UpdatePostDto } from './dto/index';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PostsService {
  constructor(
    private prisma: PrismaService,
    private config: ConfigService,
  ) {}
  create(createPostDto: CreatePostDto) {
    //store the images in a google cloud storage
    //get the url back from the cloud storage
    //create a post in prisma
    return 'This action adds a new post';
  }

  findAll() {
    return `This action returns all posts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
