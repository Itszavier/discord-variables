/** @format */

import { Converter } from "./converter";
import { RulesCollection } from "./rule";

const collection = new RulesCollection([
  {
    identifier: "{username}",
    event: "test",
    definition: (event1, event2) => {
      console.log("definition function", event1, event2);
      return `name:${event1.first}-${event2.last}`;
    },
  },

  {
    identifier: "{color}",
    event: "test",
    definition: (event1) => {
      console.log("definition function", event1, event2);
      return `${event1.color}`;
    },
  },
]);

const converter = new Converter({ collection });

const event1 = { first: "imani", color: "red" };
const event2 = { last: "brown" };

const results = converter.parse("hello world {username} {color}", "test", event1, event2);

console.log("index.test.ts:", results);
