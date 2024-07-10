"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transformer = void 0;
const ruleStore_1 = require("./ruleStore");
class Transformer {
    constructor(config) {
        if (!config || !config.collection) {
            throw new Error("Please specify the rules collection or leave it as an empty array.");
        }
        this.rulesMap = new Map();
        this.define(config.collection);
    }
    define(ruleStore) {
        const ruleStores = Array.isArray(ruleStore) ? ruleStore : [ruleStore];
        ruleStores.forEach((storeOrRule) => {
            var _a;
            if (storeOrRule instanceof ruleStore_1.RuleStore) {
                storeOrRule.rules.forEach((rule) => {
                    var _a;
                    if (!this.rulesMap.has(rule.event)) {
                        this.rulesMap.set(rule.event, []);
                    }
                    (_a = this.rulesMap.get(rule.event)) === null || _a === void 0 ? void 0 : _a.push(rule);
                });
            }
            else {
                const rule = storeOrRule;
                if (!this.rulesMap.has(rule.event)) {
                    this.rulesMap.set(rule.event, []);
                }
                (_a = this.rulesMap.get(rule.event)) === null || _a === void 0 ? void 0 : _a.push(rule);
            }
        });
        console.log(ruleStore, this.rulesMap);
    }
    parse(text, eventType, ...args) {
        if (!eventType || !text) {
            return text;
        }
        const rules = this.rulesMap.get(eventType);
        if (!rules || rules.length === 0) {
            return text;
        }
        rules.forEach((rule) => {
            const identifier = rule.identifier;
            const boundDefinition = rule.definition.bind(null, ...args);
            const returnValue = boundDefinition();
            const regex = new RegExp(identifier, "g");
            text = text.replace(regex, returnValue);
        });
        return text;
    }
}
exports.Transformer = Transformer;
