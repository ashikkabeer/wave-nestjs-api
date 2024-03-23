import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageGateway } from './message.gateway';
import { JwtModule } from '@nestjs/jwt';
@Module({
  providers: [MessageGateway, MessageService],
  imports: [JwtModule],
})
export class MessageModule {}
