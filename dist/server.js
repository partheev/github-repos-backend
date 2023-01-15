"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var github_1 = require("./routes/github");
var errorHandler_1 = require("./middlewares/errorHandler");
var httpCodes_1 = require("./constants/httpCodes");
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var path_1 = __importDefault(require("path"));
var app = express_1.default();
dotenv_1.default.config();
app.use(express_1.default.static('public'));
app.use(cors_1.default());
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.get('/health-check', function (req, res) {
    res.send({ message: 'Working........' });
});
app.use('/api/github', github_1.GithubRoutes);
console.log(__dirname);
app.get('*', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, 'public', 'index.html'));
});
app.all('*', function (req, res) {
    res.status(httpCodes_1.HTTP_CODES.BAD_REQUEST).send({ message: 'Route not found' });
});
/*
 Error handler
 Catches all errors which occurs in the request handlers and middlewares
*/
app.use(errorHandler_1.errorHandler);
if (!process.env.TESTING)
    app.listen(process.env.PORT || 3001, function () {
        console.log('Server listening on port ' + (process.env.PORT || 3001));
    });
exports.default = app;
