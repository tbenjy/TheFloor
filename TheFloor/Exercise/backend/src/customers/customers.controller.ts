import { Body, Controller, Param, Get, Post, Put } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomerDto } from './customer.dto';
import { Customer } from './customers.schema';

@Controller('customers')
export class CustomersController {
    constructor(private customersService: CustomersService) {}

    @Get()
    async findAll(): Promise<Customer[]> {
        return this.customersService.findAll();
    }

    @Get(':id')
    async find(@Param('id') id: string): Promise<Customer> {
        return await this.customersService.findOne(id);
    }

    @Post('create')
    async create(@Body() customer: CustomerDto): Promise<Customer> {
        return await this.customersService.create(customer);
    }

    @Put(':id/update')
    async update(@Param('id') id: string, @Body() customer: CustomerDto): Promise<Customer> {
        return await this.customersService.update(id, customer);
    }
}