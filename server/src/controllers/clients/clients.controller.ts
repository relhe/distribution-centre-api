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
import { ClientsService } from './clients.service';
import { CreateClientDto } from './model/dto/create-client.dto';
import { UpdateClientDto } from './model/dto/update-client.dto';
import {
    ApiConflictResponse,
    ApiCreatedResponse,
    ApiNoContentResponse,
    ApiNotFoundResponse,
    ApiOkResponse,
    ApiTags,
} from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('Clients')
@Controller('clients')
export class ClientsController {
    constructor(private readonly clientsService: ClientsService) {}

    @ApiOkResponse({
        description: 'The records have been successfully retrieved.',
    })
    @ApiNotFoundResponse({
        description: 'The records were not found.',
    })
    @Get('/')
    async findAll(@Res() res: Response) {
        try {
            const clients = await this.clientsService.findAll();
            res.status(HttpStatus.OK).json(clients);
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
    async create(
        @Body() createClientDto: CreateClientDto,
        @Res() res: Response,
    ) {
        try {
            await this.clientsService.create(createClientDto);
            res.status(HttpStatus.CREATED).json({ message: 'Client created' });
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
            const client = await this.clientsService.findOne(id);
            res.status(HttpStatus.OK).json(client);
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
        @Body() updateClientDto: UpdateClientDto,
        @Res() res: Response,
    ) {
        try {
            await this.clientsService.update(id, updateClientDto);
            res.status(HttpStatus.OK).json({ message: 'Client updated' });
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
            await this.clientsService.remove(id);
            res.status(HttpStatus.OK).json({ message: 'Client deleted' });
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
            await this.clientsService.removeAll();
            res.status(HttpStatus.OK).json({ message: 'Clients deleted' });
        } catch (error) {
            res.status(HttpStatus.NO_CONTENT).json({ message: error });
        }
    }
}
