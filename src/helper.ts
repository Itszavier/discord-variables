/** @format */

import { IRule } from "./ruleStore";
import { DefinitionFunction, EventTypes } from "./types";

export function createRule<T extends keyof EventTypes>(
  identifier: string,
  event: T,
  definition: DefinitionFunction<T>
): any {
  if (!definition || !event || !identifier) {
    throw new Error(
      `Invalid rule creation: Missing required parameter(s). Identifier: ${identifier}, Event: ${event}, Definition: ${definition}`
    );
  }

  return {
    identifier,
    event,
    definition,
  };
}
