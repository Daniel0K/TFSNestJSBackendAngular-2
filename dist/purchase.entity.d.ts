import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';
export declare class PurchaseEntity implements InMemoryDBEntity {
    id: string;
    title: string;
    price: number;
    comment: string;
    date: Date;
}
