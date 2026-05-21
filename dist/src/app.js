"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const healthRoutes_1 = __importDefault(require("./api/v1/routes/healthRoutes"));
const portfolioRoutes_1 = __importDefault(require("./api/v1/routes/portfolioRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/v1', healthRoutes_1.default);
app.use('/api/v1', portfolioRoutes_1.default);
exports.default = app;
