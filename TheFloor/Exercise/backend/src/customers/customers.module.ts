import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';
import { Customer, CustomersSchema } from './customers.schema';

@Module({
    imports: [
        MongooseModule.forFeature(
            [{ name: Customer.name, schema: CustomersSchema }]
        )
    ],
    controllers: [CustomersController],
    providers: [CustomersService],
})
export class CustomersModule {}