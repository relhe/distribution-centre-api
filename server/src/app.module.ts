import { Module } from '@nestjs/common';
import { ClientsModule } from './controllers/clients/clients.module';
import { ClientsController } from './controllers/clients/clients.controller';
import { ClientsService } from './controllers/clients/clients.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        ClientsModule,
        ConfigModule.forRoot({ isGlobal: true }),
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (config: ConfigService) => ({
                uri: config.get<string>('DB_CONNECTION_URI'),
            }),
        }),
        MongooseModule.forFeature([]),
    ],
    controllers: [ClientsController],
    providers: [ClientsService],
})
export class AppModule {}
