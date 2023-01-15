"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxiosGithubClient = void 0;
var axios_1 = __importDefault(require("axios"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.AxiosGithubClient = axios_1.default.create({
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: "Bearer " + process.env.GITHUB_TOKEN,
    },
});
