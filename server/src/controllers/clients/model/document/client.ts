import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type ClientsDocument = HydratedDocument<Client>;
@Schema()
export class Client {
    @ApiProperty({ example: 'John', description: 'Client name' })
    @Prop({ required: true })
    name: string;

    @ApiProperty({ example: '', description: 'Client email' })
    @Prop({ required: true })
    email: string;

    @ApiProperty({ example: '1234567890', description: 'Client phone' })
    @Prop({ required: true })
    phone: string;

    @ApiProperty({ example: '123 Main St', description: 'Client address' })
    @Prop({ required: true })
    address: string;
}

export const clientSchema = SchemaFactory.createForClass(Client);
