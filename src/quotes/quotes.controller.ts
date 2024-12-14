import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UpdateQuoteDto } from './dtos/update-quote.dto';
import { CreateQuoteDto } from './dtos/create-quote.dto';
import { ListAllTemplates } from 'src/common/dto/list-all-entities.dto';

@Controller('quotes')
export class QuotesController {
  @Get()
  findAll(@Query() query: ListAllTemplates): string {
    const { offset, limit, order } = query;
    return 'Devolviendo todas las cotizaciones';
  }

  @Get(':quote_id')
  findOne(
    @Param('quote_id') quote_id: string,
    @Query('download') download: boolean,
  ): string {
    if (download) return `Descargando la cotización con el ID: ${quote_id}`;
    return `Devolviendo la cotización con el ID: ${quote_id}`;
  }

  @Post()
  create(
    @Body() payload: CreateQuoteDto,
    @Query('download') download: boolean,
  ): string {
    if (download) return 'Descargando los datos: ' + JSON.stringify(payload);
    return 'Se ha creado la cotización';
  }

  @Patch(':quote_id')
  update(
    @Param('quote_id') quote_id: string,
    @Body() payload: UpdateQuoteDto,
    @Query('download') download: boolean,
  ): string {
    return `Se actualizó la cotización: ${quote_id}`;
  }
}
