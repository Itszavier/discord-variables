/** @format */
import { DefinitionFunction, EventTypes } from "./types";
export declare function createRule<T extends keyof EventTypes>(identifier: string, event: T, definition: DefinitionFunction<T>): any;
