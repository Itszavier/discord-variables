import { Converter } from "./converter";
import { Rules } from "./rule";

const eObject = { name: "imani brown" };

const rule = new Rules([
  {
    identifier: "{username}",
    type: "message",
    definition(e) {
      return e.name;
    },
  },
]);

const converter = new Converter(rule);

console.log(
  converter.parseOnMessage(eObject, "hello my friend {username} and {username}")
);
