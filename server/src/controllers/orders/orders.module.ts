import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, orderSchema } from './model/document/order';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Order.name, schema: orderSchema }]),
    ],
    controllers: [OrdersController],
    providers: [OrdersService],
})
export class OrdersModule {}
