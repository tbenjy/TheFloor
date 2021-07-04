import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CustomerDocument = Customer & Document;

@Schema()
export class Customer {
    @Prop()
    _id: number;

    @Prop({ required: true })
    firstName: string;

    @Prop({ required: true })
    lastName: string;

    @Prop({ required: true })
    city: string;

    @Prop({ required: true })
    address: string;

    @Prop({ required: true })
    phone: string;
}

export const CustomersSchema = SchemaFactory.createForClass(Customer);