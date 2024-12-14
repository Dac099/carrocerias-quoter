import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuotesController } from './quotes/quotes.controller';
import { TemplatesController } from './templates/templates.controller';
import { QuotesService } from './quotes/quotes.service';
import { TemplatesService } from './templates/templates.service';

@Module({
  imports: [],
  controllers: [AppController, QuotesController, TemplatesController],
  providers: [AppService, QuotesService, TemplatesService],
})
export class AppModule {}
