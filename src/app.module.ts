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

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
    }),
    AuthModule,
    UsersModule,
    PostsModule,
    CollegesModule,
    CloudModule,
    PrismaModule,
  ],
  controllers: [PostsController],
  providers: [AppService, PostsService, PrismaService],
})
export class AppModule {}
