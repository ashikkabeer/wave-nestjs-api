import { Injectable } from '@nestjs/common';
import { CreatePostDto, UpdatePostDto } from './dto/index';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { BlobServiceClient } from '@azure/storage-blob';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import uuid from 'uuid';
import { MulterModule } from '@nestjs/platform-express';

// const s3Client = new S3Client({
//   region: 'ap-south-1',
//   credentials: {
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   },
// });
// const getObjectUrl = async (key) => {
//   const command = new GetObjectCommand({
//     Bucket: 'bucket-name',
//     key: key,
//   });
//   const url = await getSignedUrl(s3Client, command);
//   return url;
// };

const containerName = 'posts';
@Injectable()
export class PostsService {
  constructor(
    private prisma: PrismaService,
    private config: ConfigService,
  ) {}
  async create(createPostDto: CreatePostDto, file: Express.Multer.File) {}

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
