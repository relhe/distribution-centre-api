import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';
import { Client, clientSchema } from './model/document/client';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Client.name, schema: clientSchema },
        ]),
    ],
    controllers: [ClientsController],
    providers: [ClientsService],
})
export class ClientsModule {}
