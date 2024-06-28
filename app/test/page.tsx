"use client"
import {LoadingWrapper} from "@/app/components/loader";
import {useEffect, useState} from "react";

function Page() {
    const [data, setData] = useState<string[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        // Wait 2 seconds and set data to something
        const timer = setTimeout(() => {
            setData(["data"]);
            setLoading(false);
        }, 2000);

        // Clean up the timer if the component unmounts
        return () => clearTimeout(timer);
    }, []);

    // use <LoadingWrapper of={loading}>
    // or <LoadingWrapper of={data}>
    return (
        <div>
            <h1>Page</h1>
            <LoadingWrapper of={data}>
                <div>
                    <p>loaded: data</p>
                </div>
            </LoadingWrapper>

            <div>
                test
            </div>
        </div>
    )
}

export default Page