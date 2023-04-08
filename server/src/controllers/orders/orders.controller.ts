import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
    Res,
    HttpStatus,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './model/dto/create-order.dto';
import { UpdateOrderDto } from './model/dto/update-order.dto';
import {
    ApiConflictResponse,
    ApiCreatedResponse,
    ApiNoContentResponse,
    ApiNotFoundResponse,
    ApiOkResponse,
    ApiTags,
} from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {}

    @ApiOkResponse({
        description: 'The records have been successfully retrieved.',
    })
    @ApiNotFoundResponse({
        description: 'The records were not found.',
    })
    @Get('/')
    async findAll(@Res() res: Response) {
        try {
            const orders = await this.ordersService.findAll();
            res.status(HttpStatus.OK).json(orders);
        } catch (error) {
            res.status(HttpStatus.NOT_FOUND).json({ message: error });
        }
    }

    @ApiCreatedResponse({
        description: 'The record has been successfully created.',
    })
    @ApiConflictResponse({
        description: 'The record already exists.',
    })
    @Post('/create')
    async create(@Body() createOrderDto: CreateOrderDto, @Res() res: Response) {
        try {
            await this.ordersService.create(createOrderDto);
            res.status(HttpStatus.CREATED).json({ message: 'order created' });
        } catch (error) {
            res.status(HttpStatus.CONFLICT).json({ message: error });
        }
    }

    @ApiOkResponse({
        description: 'The record has been successfully retrieved.',
    })
    @ApiNotFoundResponse({
        description: 'The record was not found.',
    })
    @Get(':id')
    async findOne(@Param('id') id: string, @Res() res: Response) {
        try {
            const order = await this.ordersService.findOne(id);
            res.status(HttpStatus.OK).json(order);
        } catch (error) {
            res.status(HttpStatus.NOT_FOUND).json({ message: error });
        }
    }

    @ApiOkResponse({
        description: 'The record has been successfully updated.',
    })
    @ApiNotFoundResponse({
        description: 'The record was not found.',
    })
    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body() updateOrderDto: UpdateOrderDto,
        @Res() res: Response,
    ) {
        try {
            await this.ordersService.update(id, updateOrderDto);
            res.status(HttpStatus.OK).json({ message: 'order updated' });
        } catch (error) {
            res.status(HttpStatus.NOT_FOUND).json({ message: error });
        }
    }

    @ApiOkResponse({
        description: 'The record has been successfully deleted.',
    })
    @ApiNoContentResponse({
        description: 'The record was not found.',
    })
    @Delete(':id')
    async remove(@Param('id') id: string, @Res() res: Response) {
        try {
            await this.ordersService.remove(id);
            res.status(HttpStatus.OK).json({ message: 'order deleted' });
        } catch (error) {
            res.status(HttpStatus.NO_CONTENT).json({ message: error });
        }
    }

    @ApiOkResponse({
        description: 'The records have been successfully deleted.',
    })
    @ApiNoContentResponse({
        description: 'The records were not found.',
    })
    @Delete('/')
    async removeAll(@Res() res: Response) {
        try {
            await this.ordersService.removeAll();
            res.status(HttpStatus.OK).json({ message: 'orders deleted' });
        } catch (error) {
            res.status(HttpStatus.NO_CONTENT).json({ message: error });
        }
    }
}
