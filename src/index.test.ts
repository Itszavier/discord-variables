/** @format */
import { Transformer } from "./converter";
import { createRule } from "./helper";
import { RuleStore } from "./ruleStore";

const rules = new RuleStore([
  createRule("{username}", "guildCreate", (message) => {
    return;
  }),
]);
