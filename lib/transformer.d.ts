/** @format */
import { IRule, RuleStore } from "./ruleStore";
import { EventTypes } from "./types";
export declare class Transformer<T extends keyof EventTypes> {
    private rulesMap;
    constructor(config: {
        collection: RuleStore<T> | RuleStore<T>[];
    });
    define(ruleStore: RuleStore<T> | RuleStore<T>[] | IRule<T> | IRule<T>[]): void;
    parse<T extends keyof EventTypes>(text: string, eventType: T, ...args: Parameters<any>): string;
}
