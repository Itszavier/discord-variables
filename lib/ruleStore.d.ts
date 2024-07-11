/** @format */
import { EventTypes } from "./types";
export interface IRule<T extends keyof EventTypes> {
    identifier: string;
    event: T;
    definition: EventTypes[T];
}
export declare class RuleStore<T extends keyof EventTypes> {
    rules: IRule<T>[];
    constructor(rules: IRule<T>[]);
}
