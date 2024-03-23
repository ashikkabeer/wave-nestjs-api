import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CreateMessageDto {
  @IsString()
  @IsNotEmpty()
  content: string;

  @IsNumber()
  @IsNotEmpty()
  chatId: number;

  @IsNumber()
  @IsNotEmpty()
  userId: number;
}
