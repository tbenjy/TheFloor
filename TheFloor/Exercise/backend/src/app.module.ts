import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { CustomersModule } from './customers/customers.module';

const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

@Module({
  imports: [
    MongooseModule.forRoot(
        'mongodb+srv://thefloor:thefloor@thefloor.kxtk9.mongodb.net/TheFloor?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
            connectionFactory: (connection) => {
                connection.plugin(AutoIncrement);
                return connection;
            }
        }
    ),
    CustomersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}