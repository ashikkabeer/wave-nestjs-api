import { isNotEmpty, isString } from 'class-validator';
export class CreateMessageDto {
  @isNotEmpty()
  @isString()
  content: string;

  @isString()
  @isNotEmpty()
  chatId: string;

  @isString()
  @isNotEmpty()
  userId: string;
}
