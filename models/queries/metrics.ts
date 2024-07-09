export enum metrics {
    selByEventSales = `
        select *
        from
            metrics m
                join
            metrics_sales ms on m.metric_id = ms.metric_id
        where
            m.event_id = $1;
    `,

    selByEventUsers = `
        select *
        from
            metrics m
                join
            metrics_users mu on m.metric_id = mu.metric_id
        where
            m.event_id = $1;
    `,

}
