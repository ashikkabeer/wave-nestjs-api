import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import * as argon from 'argon2';
import { ConfigService } from '@nestjs/config';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { LoginAuthDto } from './dto/login-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private config: ConfigService,
    private jwt: JwtService,
  ) {}

  async signup(createAuthDto: CreateAuthDto) {
    const hash = await argon.hash(createAuthDto.password);
    try {
      const user = await this.prisma.user.create({
        data: {
          name: createAuthDto.name,
          username: createAuthDto.username,
          email: createAuthDto.email,
          password: hash,
          collegeId: 0,
          gender: createAuthDto.gender,
        },
      });

      return this.signToken(user.id, createAuthDto.email, user.username);
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        // * p2002 -> duplication
        if (error.code == 'P2002') {
          throw new ForbiddenException('Credentials Already Taken');
        }
      }
      throw error;
    }
  }

  async signin(dto: LoginAuthDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
        username: dto.username,
      },
    });
    if (!user) {
      throw new ForbiddenException('User Not Found');
    }
    const pwMatch = await argon.verify(user.password, dto.password);
    if (!pwMatch) {
      throw new ForbiddenException('Incorrect Password');
    }
    return this.signToken(user.id, user.email, user.username);
  }
  async signToken(
    userId: number,
    email: string,
    username: string,
  ): Promise<{ access_token }> {
    const payload = {
      sub: userId,
      email,
      username,
    };
    const token = await this.jwt.signAsync(payload, {
      expiresIn: '15min',
      secret: this.config.get('JWT_SECRET'),
    });
    return {
      access_token: token,
    };
  }
}
