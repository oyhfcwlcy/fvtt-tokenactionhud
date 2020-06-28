import {RollHandlerBasePf2e as Core} from "../rolls/pf2e-base.js"

export function getRollHandler(rollHandler = "") {
    switch (rollHandler) {
        case "core":
            return new Core();
        default:
            return new Core();
    }
}