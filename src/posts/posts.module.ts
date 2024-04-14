import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { MulterConfigModule } from 'src/multer/multer.module';
import { MulterModule } from '@nestjs/platform-express';
@Module({
  imports: [
    MulterConfigModule,
    MulterModule.register({
      dest: '../uploads', // Destination folder for uploaded files
    }),
  ],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
