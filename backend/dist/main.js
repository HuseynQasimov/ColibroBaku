"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const dotenv_1 = require("dotenv");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const ioredis_1 = __importDefault(require("ioredis"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const UserResolver_1 = require("./Resolvers/UserResolver");
const restRoute_1 = __importDefault(require("./Helpers/restRoute"));
const ProductResolver_1 = require("./Resolvers/ProductResolver");
(0, dotenv_1.config)();
const main = async () => {
    const app = (0, express_1.default)();
    const redis = new ioredis_1.default();
    app.use((0, cookie_parser_1.default)());
    app.use((0, express_fileupload_1.default)());
    app.use((0, cors_1.default)({
        credentials: true,
        origin: ["http://localhost:3000"]
    }));
    app.use(restRoute_1.default);
    await (0, typeorm_1.createConnection)();
    const schema = await (0, type_graphql_1.buildSchema)({
        resolvers: [UserResolver_1.UserResolver, ProductResolver_1.ProductResolver]
    });
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema,
        context: ({ req, res }) => {
            return ({ req, res, redis });
        }
        // formatError: (err) => {
        //   if (err?.extensions?.code) {
        //     return err.extensions.code
        //   }
        // }
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app, cors: false });
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on http://localhost:${process.env.PORT}/graphql`);
    });
};
main();
//# sourceMappingURL=main.js.map