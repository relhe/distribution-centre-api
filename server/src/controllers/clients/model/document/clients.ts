import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type ClientsDocument = Clients & Document;
@Schema()
export class Clients {
    @ApiProperty({
        example: '5f1f3e9c9a1a1a0b0d8e8f9c',
        description: 'Unique identifier',
    })
    _id: string;

    @ApiProperty({ example: 'John', description: 'Client name' })
    @Prop()
    name: string;

    @ApiProperty({ example: '', description: 'Client email' })
    @Prop()
    email: string;

    @ApiProperty({ example: '1234567890', description: 'Client phone' })
    @Prop()
    phone: string;

    @ApiProperty({ example: '123 Main St', description: 'Client address' })
    @Prop()
    address: string;
}

export const clientsSchema = SchemaFactory.createForClass(Clients);
