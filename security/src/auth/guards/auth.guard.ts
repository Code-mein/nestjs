import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest(); // this is the request object
    const authorization = request.headers['authorization']; // get the authorization header
    const token = authorization?.split(' ')[1]; // get the token from the authorization header and we assume tha the token is in the format 'Bearer <token>'
    console.log(authorization);
    console.log(token);

    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const tokenPayload = await this.jwtService.verifyAsync(token); // verify the token
      console.log('before:', request.user);
      request.user = {
        userId: tokenPayload.sub,
        username: tokenPayload.username,
      }; // set the user object in the request object
      console.log('after:', request.user);
      return true;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      throw new UnauthorizedException();
    }

    return true;
  }
}
