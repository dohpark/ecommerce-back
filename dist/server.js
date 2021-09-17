"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./src/app"));
const port = Number(process.env.PORT) || 3000;
app_1.default.listen(port, () => {
    console.log(`${port}포트 서버 대기 중!`);
});
