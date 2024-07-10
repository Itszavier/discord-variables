"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRule = createRule;
function createRule(identifier, event, definition) {
    if (!definition || !event || !identifier) {
        throw new Error(`Invalid rule creation: Missing required parameter(s). Identifier: ${identifier}, Event: ${event}, Definition: ${definition}`);
    }
    return {
        identifier,
        event,
        definition,
    };
}
