import fs from "fs";

export class Offer {
    id;
    method;
    item;
    percentage;
    valid;

    constructor(message) {
        if (
            (typeof message.item === "string" &&
            typeof message.percentage === "number" &&
            message.method === methods.post) ||
            (Object.values(methods).includes(message.method) && message.id !== undefined)
        ) {
            this.id = message.id;
            this.item = message.item;
            this.method = message.method;
            this.percentage = message.percentage;
            this.valid = true;
        } else {
            this.valid = false;
        }
    }
}

const data = fs.readFileSync("config/global.conf", "utf8");
export const methods = JSON.parse(data);
