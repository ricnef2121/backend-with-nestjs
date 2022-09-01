import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  //it recives a lot of params
  @Get(':id/products/:productId')
  getCategory(@Param('id') id: string, @Param('productId') productId: string) {
    return {
      message: `product con id ${productId} in category ${id}`,
    };
  }
}
