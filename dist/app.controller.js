"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const in_memory_db_1 = require("@nestjs-addons/in-memory-db");
const purchase_entity_1 = require("./purchase.entity");
let AppController = class AppController {
    constructor(dbService) {
        this.dbService = dbService;
    }
    getAll() {
        return this.dbService.getAll();
    }
    create(dto) {
        return this.dbService.create(dto);
    }
    seed() {
        this.dbService.seed((idx) => ({
            id: String(idx + 1), title: `Purchase-${idx + 1}`, date: new Date(), price: (idx + 1) * 10, comment: `Привет-${idx + 1}`
        }), 5);
        return this.dbService.getAll();
    }
    update(id, purchase) {
        return this.dbService.update(purchase);
    }
    delete(id) {
        return this.dbService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], AppController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", purchase_entity_1.PurchaseEntity)
], AppController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('seed'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], AppController.prototype, "seed", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, purchase_entity_1.PurchaseEntity]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "delete", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [in_memory_db_1.InMemoryDBService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map