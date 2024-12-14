import { Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ListAllTemplates } from '../common/dto/list-all-entities.dto';

@Controller('templates')
export class TemplatesController {
  @Get()
  getAll(@Query() query: ListAllTemplates): string {
    const { offset, limit, order } = query;
    return `Todos los templates con offset: ${offset}, limit: ${limit}, order: ${order}`;
  }

  @Get(':template_id')
  getOne(
    @Param('template_id') template_id: string,
    @Query('download') download: boolean,
  ): string {
    if (download) return 'Descargando template' + template_id;
    return 'Template con ID: ' + template_id;
  }

  @Get('current')
  getCurrent(): string {
    return 'Template utilizado para las cotizaciones';
  }

  @Post()
  save(): string {
    return 'Subiendo nuevo template';
  }

  @Patch(':template_id')
  update(@Param('template_id') template_id: string): string {
    return 'Template eliminado ID: ' + template_id;
  }
}
