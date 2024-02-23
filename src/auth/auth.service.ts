import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import * as argon from 'argon2';
import { ConfigService } from '@nestjs/config';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private config: ConfigService) {
  }
  async signup(createAuthDto: CreateAuthDto) :Promise<String> {
    const hash:string= await argon.hash(createAuthDto.password)
    try{
      const user={await this.prisma.user.create({
        data:{
          name:createAuthDto.name,
          username:createAuthDto.username,
          email:createAuthDto.email,
          hash,
          collegeId:createAuthDto.collegeId,
          gender:createAuthDto.gender,
        }
      })
      }
      return this.signToken(user.id, this.collegeId, this.email, user.username)

    } catch (error) {
      if(error instanceof PrismaClientKnownRequestError) {
        // * p2002 -> duplication
        if(error.code == 'P2002') {
          throw new ForbiddenException('Credentials Already Taken')
        }
      }
      throw error
    }
  }
  async signin(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }
  async signToken(userId: number,collegeId:number, email:string, username:string):Promise<String>{
    const payload ={
      sub:userId,
      collegeId,
      email,
      username,
    };
    const token ={ await this.jwt.signAsync(payload,{
      expiresIn:string = '15min',
      secret: this.config.get('JWT_SECRET'),
    })}
    return {
      access_token: token
    }
  }
}
