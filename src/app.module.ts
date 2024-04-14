import { Module } from '@nestjs/common';
import { CollegesModule } from './colleges/colleges.module';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { PostsController } from './posts/posts.controller';
import { PostsService } from './posts/posts.service';
import { UsersModule } from './users/users.module';
import { CloudModule } from './cloud/cloud.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { EventModule } from './event/event.module';
import { MessageModule } from './message/message.module';
import { RoomModule } from './room/room.module';
import { MulterModule } from '@nestjs/platform-express';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UsersModule,
    PostsModule,
    CollegesModule,
    CloudModule,
    PrismaModule,
    EventModule,
    MessageModule,
    RoomModule,
    MulterModule,
  ],
  controllers: [PostsController],
  providers: [PostsService, PrismaService],
})
export class AppModule {}
