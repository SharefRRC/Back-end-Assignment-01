"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../src/app"));
describe('GET /api/v1/health', () => {
    it('should return health details', async () => {
        const response = await (0, supertest_1.default)(app_1.default).get('/api/v1/health');
        expect(response.status).toBe(200);
        expect(response.body.status).toBe('OK');
        expect(typeof response.body.uptime).toBe('number');
        expect(typeof response.body.timestamp).toBe('string');
        expect(response.body.version).toBe('1.0.0');
    });
});
