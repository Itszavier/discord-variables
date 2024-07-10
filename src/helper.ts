/** @format */

import { IRule } from "./ruleStore";
import { EventTypes } from "./types";


export function createRule<T extends keyof EventTypes>(
  identifier: string,
  event: T,
  definition: EventTypes[T]
): IRule<T> {
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
