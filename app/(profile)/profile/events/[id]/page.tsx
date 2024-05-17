"use client"
import {useSession} from "next-auth/react";
import {useState} from "react";
import {getUserEvent} from "@/app/(profile)/profile/events/actions";
import {UserEvents} from "@/app/components/ui/events";
import {useParams} from "next/navigation";
import {getEventMetricSale} from "@/app/(profile)/profile/events/[id]/actions";

function Page() {
    const {data: session} = useSession();
    const params = useParams()
    const id: number = parseInt(params.id as string)

    const [metricSales, setMetricSales] = useState<IMetricSales[]>([]);

    if (session?.user) {
        getEventMetricSale(id)
            .then(metricSales => {
                setMetricSales(metricSales);
            })
    } else {
        // redirect / login
    }
    return (
        <div className="container">
            <h1>metrics</h1>
            {
                metricSales.length == 0 ? (
                    <h2>loading</h2>
                ) : (
                    metricSales.map((metricSale, id) => (
                        <></> //TODO: implement UI for metricSale
                    ))
                )
            }
        </div>
    )
}

export default Page