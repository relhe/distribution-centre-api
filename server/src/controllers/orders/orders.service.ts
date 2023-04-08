import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from './model/document/order';
import { CreateOrderDto } from './model/dto/create-order.dto';
import { UpdateOrderDto } from './model/dto/update-order.dto';

@Injectable()
export class OrdersService {
    constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}

    async create(createOrderDto: CreateOrderDto): Promise<void> {
        try {
            await this.orderModel.create(createOrderDto);
            return Promise.resolve();
        } catch (error) {
            return Promise.reject(`Fail : ${error}`);
        }
    }

    async findAll(): Promise<Order[]> {
        try {
            const orders = await this.orderModel.find().exec();
            return Promise.resolve(orders);
        } catch (error) {
            return Promise.reject(`Fail : ${error}`);
        }
    }

    async findOne(id: string): Promise<Order> {
        try {
            const order = await this.orderModel.findById(id).exec();
            return Promise.resolve(order);
        } catch (error) {
            return Promise.reject(`Fail : ${error}`);
        }
    }

    async update(id: string, updateOrderDto: UpdateOrderDto): Promise<void> {
        try {
            await this.orderModel.findByIdAndUpdate(id, updateOrderDto).exec();
            return Promise.resolve();
        } catch (error) {
            return Promise.reject(`Fail : ${error}`);
        }
    }

    async remove(id: string): Promise<Order> {
        try {
            const order = await this.orderModel.findByIdAndDelete(id).exec();
            return Promise.resolve(order);
        } catch (error) {
            return Promise.reject(`Fail : ${error}`);
        }
    }
    async removeAll(): Promise<void> {
        try {
            await this.orderModel.deleteMany({}).exec();
            return Promise.resolve();
        } catch (error) {
            return Promise.reject(`Fail : ${error}`);
        }
    }
}
