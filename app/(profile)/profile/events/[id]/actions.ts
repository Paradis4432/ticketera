"use server"

import db from "@/app/db/db";

import {metrics} from "@/models/queries/metrics";

async function getEventMetricSale(event_id: number | null | undefined): Promise<IMetricSales[]> {
    if (!event_id) return []
    const data = await db.query(metrics.selByEventSales, event_id);
    return data[0] as IMetricSales[]
}

async function getEventMetricUser(event_id: number | null | undefined): Promise<IMetricUsers[]> {
    if (!event_id) return []
    const data = await db.query(metrics.selByEventUsers, event_id);
    return data[0] as IMetricUsers[]
}

export {
    getEventMetricSale,
    getEventMetricUser
}