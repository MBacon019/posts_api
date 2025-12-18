import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return {
      success: true,
      message: 'bacon-posts-api on line',
      data: 'Sistema Posts API',
      version: '1.0.0',
    }
  }
}
