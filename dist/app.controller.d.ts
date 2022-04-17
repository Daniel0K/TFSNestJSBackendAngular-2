import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { PurchaseEntity } from './purchase.entity';
export declare class AppController {
    private dbService;
    constructor(dbService: InMemoryDBService<any>);
    getAll(): PurchaseEntity[];
    create(dto: Partial<PurchaseEntity>): PurchaseEntity;
    seed(): PurchaseEntity[];
    update(id: string, purchase: PurchaseEntity): void;
    delete(id: string): void;
}
