import { Module } from '@nestjs/common';
import { ClientsModule } from './controllers/clients/clients.module';
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
    ],
})
export class AppModule {}
