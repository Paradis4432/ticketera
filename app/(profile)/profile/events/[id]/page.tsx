"use client"
import {useSession} from "next-auth/react";
import {useEffect, useState} from "react";
import {getEventMetricSale, getEventMetricUser} from "@/app/(profile)/profile/events/[id]/actions";
import {MetricSales} from "@/app/components/ui/metrics";

function Page({params}: { params: { id: string } }) {
    const {data: session} = useSession();
    const [metricSales, setMetricSales] = useState<IMetricSales[]>([]);
    const [metricUsers, setMetricUsers] = useState<IMetricUsers[]>([]);

    useEffect(() => {
        if (session?.user) {
            getEventMetricSale(Number(params.id))
                .then(metricSales => {
                    setMetricSales(metricSales);
                })
            getEventMetricUser(Number(params.id))
                .then(metricUsers => {
                    setMetricUsers(metricUsers);
                })
        } else {
            // redirect / [...login]
        }
    }, [params.id, session]);


    return (
        <div className="container">
            <h2>metrics sales</h2>

            {
                metricSales.length == 0 ? (
                    <h2>loading</h2>
                ) : (
                    metricSales.map((metricSale, id) => (
                        <MetricSales metricSales={metricSale} key={id}/>
                    ))
                )
            }

            <h2>metric users</h2>
            {metricUsers ? (

                <ul>
                    <li>
                        <h3>Visitas: {metricUsers[0]?.visits}</h3>
                    </li>
                    <li>
                        <h3>Empezaron pero no compraron: {metricUsers[0]?.started_but_denied}</h3>
                    </li>
                    <li>
                        <h3>En favoritos: {metricUsers[0]?.in_fav}</h3>
                    </li>
                </ul>
            ) : (
                <h2>loading</h2>
            )

            }


        </div>
    )
}

export default Page