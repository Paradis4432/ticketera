import {TEvent} from "@/data/TEvent";

async function fetchDestacados(): Promise<TEvent[]> {
    return [
        new TEvent(0, "test"),
        new TEvent(1, "test1"),
        new TEvent(2, "test2"),
        new TEvent(3, "test3"),
    ];
}

export {fetchDestacados}


