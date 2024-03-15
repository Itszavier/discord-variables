"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rules = exports.EventType = void 0;
var EventType;
(function (EventType) {
    EventType[EventType["message"] = 0] = "message";
    EventType[EventType["interactionCreate"] = 1] = "interactionCreate";
    EventType[EventType["memberJoin"] = 2] = "memberJoin";
    EventType[EventType["memberLeave"] = 3] = "memberLeave";
    EventType[EventType["botJoin"] = 4] = "botJoin";
})(EventType || (exports.EventType = EventType = {}));
class Rules {
    constructor(rules) {
        this.rules = rules;
    }
}
exports.Rules = Rules;
