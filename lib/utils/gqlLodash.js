"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gql = void 0;
var compact_1 = __importDefault(require("lodash/compact"));
var flatten_1 = __importDefault(require("lodash/flatten"));
var flow_1 = __importDefault(require("lodash/flow"));
var zip_1 = __importDefault(require("lodash/zip"));
var graphql_tag_1 = __importDefault(require("graphql-tag"));
var graphql_lodash_1 = require("graphql-lodash");
var merge = flow_1.default([zip_1.default, flatten_1.default, compact_1.default]);
var gql = function (strings) {
    var interpolations = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        interpolations[_i - 1] = arguments[_i];
    }
    var queryWithLodashDirectives = merge(strings, interpolations).join('');
    var _a = graphql_lodash_1.graphqlLodash(queryWithLodashDirectives), query = _a.query, transform = _a.transform;
    var parsed = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", ""], ["", ""])), query);
    parsed.transform = transform;
    return parsed;
};
exports.gql = gql;
exports.default = exports.gql;
var templateObject_1;
//# sourceMappingURL=gqlLodash.js.map