import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
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
    @Get()
    findAll() {
        return this.clientsService.findAll();
    }

    @ApiCreatedResponse({
        description: 'The record has been successfully created.',
    })
    @ApiConflictResponse({
        description: 'The record already exists.',
    })
    @Post(/*'create'*/)
    create(@Body() createClientDto: CreateClientDto) {
        return this.clientsService.create(createClientDto);
    }

    @ApiOkResponse({
        description: 'The record has been successfully retrieved.',
    })
    @ApiNotFoundResponse({
        description: 'The record was not found.',
    })
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.clientsService.findOne(id);
    }

    @ApiOkResponse({
        description: 'The record has been successfully updated.',
    })
    @ApiNotFoundResponse({
        description: 'The record was not found.',
    })
    @Put(':id')
    update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
        return this.clientsService.update(id, updateClientDto);
    }

    @ApiOkResponse({
        description: 'The record has been successfully deleted.',
    })
    @ApiNoContentResponse({
        description: 'The record was not found.',
    })
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.clientsService.remove(id);
    }

    @ApiOkResponse({
        description: 'The records have been successfully deleted.',
    })
    @ApiNoContentResponse({
        description: 'The records were not found.',
    })
    @Delete()
    removeAll() {
        return this.clientsService.removeAll();
    }
}
