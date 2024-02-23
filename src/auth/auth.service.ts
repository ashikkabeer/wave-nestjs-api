import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';

@Injectable()
export class AuthService {
  signup(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }
  signin(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }
}
