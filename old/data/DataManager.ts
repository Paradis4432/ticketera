import {NormalEvent} from "@/old/data/events/impls/NormalEvent";

async function fetchDestacados(): Promise<NormalEvent[]> {
    return [
        new NormalEvent(0, "test"),
        new NormalEvent(1, "test1"),
        new NormalEvent(2, "test2"),
        new NormalEvent(3, "test3"),
    ];
}

export {fetchDestacados}


