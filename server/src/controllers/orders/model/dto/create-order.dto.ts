import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ArticleInfo } from '../entity/article.info.entity';
import { OrderSummary } from '../entity/order.summary.entity';

export class CreateOrderDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    clientId: string;

    @ApiProperty()
    @IsNotEmpty()
    items: ArticleInfo[];

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    total: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    shippingAddress: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    billingAddress: string;
}
