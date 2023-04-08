import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, HydratedDocument } from 'mongoose';
import { ArticleInfo } from '../entity/article.info.entity';
import { OrderSummary } from '../entity/order.summary.entity';

export type OrdersDocument = HydratedDocument<Order>;
@Schema()
export class Order {
    @ApiProperty({ example: 'xews-3wds-ffdcjkkjkj', description: 'Client id' })
    @Prop({ required: true })
    clientId: string;

    @ApiProperty({
        example: '[]',
        description: 'List of articles ordered by client',
    })
    @Prop({ required: true })
    items: ArticleInfo[];

    @ApiProperty({ example: '12.02', description: 'Total price' })
    @Prop({ required: true })
    total: number;

    @ApiProperty({
        example: '123 Main St',
        description: 'order shipping address',
    })
    @Prop({ required: true })
    shippingAddress: string;

    @ApiProperty({
        example: '123 Main St',
        description: 'order billing address',
    })
    @Prop({ required: true })
    billingAddress: string;
}

export const orderSchema = SchemaFactory.createForClass(Order);
