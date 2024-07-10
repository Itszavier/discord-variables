/** @format */

import { IRule } from "./ruleStore";
import { EventTypes } from "./types";
/**
 *
 * @param identifier - the dynanmic varible that your defining
 * @param event - The event it can be access from
 * @param definition - when the transformer sees your identifier in a string it will replace it with the return value
 * @returns IRule
 */
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
