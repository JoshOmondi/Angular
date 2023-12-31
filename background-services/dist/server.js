"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_cron_1 = __importDefault(require("node-cron"));
const welcomeUser_1 = require("./mailservices/welcomeUser");
// import { welcomeUser } from "./mailservices/welcomeUser";
// import { assignedProjectEmail } from "./mailservices/useremail";
const app = (0, express_1.default)();
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    node_cron_1.default.schedule("*/10 * * * * *", () => {
        console.log("check new user");
        (0, welcomeUser_1.welcomeUser)();
        // assignedProjectEmail();
    });
});
run();
app.listen(4400, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("mail server running on port 4400");
}));
