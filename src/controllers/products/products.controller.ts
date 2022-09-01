import { Controller, Get, Param, Query, Post, Body, Put } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  // query params
  // se usa para enviar un gran conjunto de parametros
  @Get()
  getProducts(
    @Query('brand') brand: string,
    @Query('limit') limit = 20,
    @Query('offset') offset = 0,
  ) {
    return {
      message: `products limit ${limit}, offset =>  ${offset} and brand => ${brand}`,
    };
  }

  @Get('filter')
  getProductFilter() {
    return {
      message: `products filter`,
    };
  }

  //it recives one param
  @Get(':id')
  getProduct(@Param('id') id: string) {
    return {
      message: `product con id ${id}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return { message: 'action create', payload };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return { id, payload };
  }
}
