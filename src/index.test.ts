/** @format */

import { Transformer } from "./converter";
import { createRule } from "./helper";
import { RuleStore } from "./ruleStore";

const rules = new RuleStore([
  createRule("{username}", "test", function (e) {
    return e.username;
  }),

  createRule("{name}", "test", function (e) {
    return e.name;
  }),
]);

const text = `
Hello {name},

Welcome to our community! We're excited to have you join us.

Your username is {username}. Please enjoy your stay!

Message deleted by {name} at {time}.
Please contact support if you have any questions.

Interaction: {buttonId} clicked by {name}.
Thank you for your interaction.

Have a great day!
`;

const event = {
  name: "imani brown",
  username: "@bob",
};

const parser = new Transformer({
  collection: rules,
});

console.log(parser.parse(text, "test", event));
