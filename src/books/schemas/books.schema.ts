import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BooksDocument = HydratedDocument<Books>;

@Schema()
export class Books extends Document {
  @Prop()
  titulo: string;

  @Prop()
  autor: number;

  @Prop()
  codigo: string;
}

export const BookSchema = SchemaFactory.createForClass(Books);

////att