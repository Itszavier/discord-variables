import { IRule, Rules } from "./rule";

export class Converter {
  private rule: Rules;

  constructor(rules: Rules) {
    if (rules instanceof Rules) {
      this.rule = rules;
    } else {
      throw new Error("Rules must be an intanceof Rules class");
    }
  }

  parseOnMessage(event: any, text: string) {
    const array = text.trim().split(" ");
    const rules = this.rule.rules.filter((rule) => rule.type === "message");

    const newArray: (string | number | undefined)[] = [];

    for (const rule of rules) {
      let matchFound = false;

      array.forEach((value, index) => {
        if (value === rule.identifier) {
          newArray[index] = rule.definition(event);
          matchFound = true;
        }
      });

      if (matchFound) {
        break; // Exit loop if match found
      }
    }

    // Fill in the newArray with the original values if no rule matches
    array.forEach((value, index) => {
      newArray[index] = newArray[index] || value;
    });

    return newArray.join(" ");
  }
}
