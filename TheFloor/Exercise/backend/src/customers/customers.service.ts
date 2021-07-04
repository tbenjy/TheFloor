import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CustomerDto } from './customer.dto';
import { Customer, CustomerDocument } from './customers.schema';

@Injectable()
export class CustomersService {
    constructor(
        @InjectModel(Customer.name) private customerModel: Model<CustomerDocument>
    ) {}

    async findAll(): Promise<Customer[]> {
        return await this.customerModel.find().select("_id firstName lastName").sort("lastName firstName").exec();
    }

    async findOne(id: string): Promise<Customer> {
        return await this.customerModel.findById(id).exec();
    }

    async create(customer: CustomerDto): Promise<Customer> {
        return await new this.customerModel({
            firstName: customer.firstName,
            lastName: customer.lastName,
            city: customer.city,
            address: customer.address,
            phone: customer.phone
        }).save();
    }

    async update(id: string, customer: CustomerDto): Promise<Customer> {
        return await this.customerModel.findByIdAndUpdate(id, customer).exec();
    }
}