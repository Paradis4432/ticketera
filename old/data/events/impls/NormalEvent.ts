import {IEvent} from "@/old/data/events/IEvent";

export class NormalEvent implements IEvent {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}