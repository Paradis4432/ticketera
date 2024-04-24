"use server"

import db from "@/app/utils/db/DB";

let testingDelay = true;

interface IEvent {
    id: number,
    name: string,
    description: string,
    date: string,
    location: string,
    price: number,
    capacity: number,
}

interface IQueryResponse<T> {
    message: string,
    code: number | 0,
    data: T
}

const demo = [
    {
        name: "event1",
        description: "event1 description",
        date: "2021-01-01",
        location: "location1",
        price: 100,
        capacity: 100,
    },
    {
        name: "event2",
        description: "event2 description",
        date: "2022-02-02",
        location: "location2",
        price: 200,
        capacity: 200,
    }
] as IEvent[]

export default async function getEvents(): Promise<IQueryResponse<IEvent[]>> {
    try {
        if (testingDelay) await new Promise(resolve => setTimeout(resolve, 2000))
        const data = await db.query("SELECT * FROM events");
        return {
            message: "success",
            code: 200,
            data: data[0] as IEvent[]
        }
    } catch (error) {
        return {
            message: "error",
            code: 500,
            data: []
        }
    }
}

export async function getDemo() {
    // wait 2 seconds
    await new Promise(resolve => setTimeout(resolve, 2000))
    return demo
}

export type {IEvent}