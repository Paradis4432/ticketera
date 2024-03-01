import {id} from "postcss-selector-parser";

export class TEvent {
    id: number;
    name: string;


    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}