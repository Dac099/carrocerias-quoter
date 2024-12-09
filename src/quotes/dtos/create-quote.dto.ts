export class CreateQuoteDto {
  clientName?: string;
  companyName?: string;
  email?: string;
  phone?: string;
  description: string;
  height: number;
  width: number;
  length: number;
  price: number;
  deliveryTime: string;
  extras?: object;
}
