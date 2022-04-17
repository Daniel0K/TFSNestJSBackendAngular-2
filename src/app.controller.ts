import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {InMemoryDBService} from '@nestjs-addons/in-memory-db';
import {PurchaseEntity} from './purchase.entity';

@Controller()
export class AppController {
    constructor(private dbService: InMemoryDBService<any>) {
    }

    @Get()
    getAll(): PurchaseEntity[] {
        return this.dbService.getAll();
    }

    @Post()
    create(@Body() dto: Partial<PurchaseEntity>): PurchaseEntity {
        return this.dbService.create(dto);
    }

    @Post('seed')
    seed(): PurchaseEntity[] {
        this.dbService.seed((idx: number) => ({
            id: String(idx + 1), title: `Purchase-${idx + 1}`,date: new Date(), price: (idx + 1) * 10, comment:`Привет-${idx + 1}`
        }), 5);

        return this.dbService.getAll();
    }

    @Put(':id')
    update(@Param('id') id:string, @Body() purchase: PurchaseEntity) : void {
        return this.dbService.update(purchase);
    }

    @Delete(':id')
    delete(@Param('id') id: string): void {
        return this.dbService.delete(id);
    }
}
