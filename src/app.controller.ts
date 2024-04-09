import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Bienvenido con este nombre';
  }

  @Get('blog/:blogId')
  getBlog(@Param('blogId') blogId: number) {
    console.log(blogId);
    return `Este es mi id ${blogId}`;
  }

  @Get('categories/:id/blog/:blogId')
  getCategory(@Param('id') id: number, @Param('blogId') blogId: number) {
    return `Este es mi id ${id} y el del blog ${blogId}`;
  }

  @Get('categories')
  findAll(@Query('limit') limit = 100, @Query('offset') offset = 200) {
    return `${offset} ${limit}`;
  }
}
