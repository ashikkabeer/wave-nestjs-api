export class CreateMessageDto {
  @IsString()
  @IsNotEmpty()
  @IsAlpha()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsAlphanumeric()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  gender: string;
}
