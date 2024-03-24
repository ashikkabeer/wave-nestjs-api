import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateRoomDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  description: string;

  @IsString()
  mentor: string;

  @IsString()
  author: string;

  @IsNumber()
  semester: number;

  @IsString()
  department: string;

  @IsString()
  subject: string;
}
