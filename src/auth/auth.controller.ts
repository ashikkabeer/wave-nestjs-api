import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto, LoginAuthDto } from './dto/index';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.signup(createAuthDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signin(@Body() loginAuthDto: LoginAuthDto) {
    return this.authService.signin(loginAuthDto);
  }
}
