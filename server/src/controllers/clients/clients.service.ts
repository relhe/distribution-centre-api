import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Client } from './model/document/client';
import { CreateClientDto } from './model/dto/create-client.dto';
import { UpdateClientDto } from './model/dto/update-client.dto';

@Injectable()
export class ClientsService {
    constructor(@InjectModel(Client.name) private clientModel: Model<Client>) {}

    async create(createClientDto: CreateClientDto): Promise<void> {
        try {
            await this.clientModel.create(createClientDto);
            return Promise.resolve();
        } catch (error) {
            return Promise.reject(`Fail : ${error}`);
        }
    }

    async findAll(): Promise<Client[]> {
        try {
            const clients = await this.clientModel.find().exec();
            return Promise.resolve(clients);
        } catch (error) {
            return Promise.reject(`Fail : ${error}`);
        }
    }

    async findOne(id: string): Promise<Client> {
        try {
            const client = await this.clientModel.findById(id).exec();
            return Promise.resolve(client);
        } catch (error) {
            return Promise.reject(`Fail : ${error}`);
        }
    }

    async update(id: string, updateClientDto: UpdateClientDto): Promise<void> {
        try {
            await this.clientModel
                .findByIdAndUpdate(id, updateClientDto)
                .exec();
            return Promise.resolve();
        } catch (error) {
            return Promise.reject(`Fail : ${error}`);
        }
    }

    async remove(id: string): Promise<Client> {
        try {
            const client = await this.clientModel.findByIdAndDelete(id).exec();
            return Promise.resolve(client);
        } catch (error) {
            return Promise.reject(`Fail : ${error}`);
        }
    }
    async removeAll(): Promise<void> {
        try {
            await this.clientModel.deleteMany({}).exec();
            return Promise.resolve();
        } catch (error) {
            return Promise.reject(`Fail : ${error}`);
        }
    }
}
