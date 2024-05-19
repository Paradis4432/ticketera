export enum metrics {
    selByEventSales = `
        select
            ms.metric_sale_id,
            ms.ticket_id,
            ms.ticket_name,
            ms.sold,
            ms.courtesies,
            ms.cancelled,
            ms.not_claimed,
            ms.price,
            ms.total
        from
            metrics m
                join
            metrics_sales ms on m.metric_id = ms.metric_id
        where
            m.event_id = ?;
    `,

    selByEventUsers = `
        select
            mu.metric_user_id,
            mu.visits,
            mu.started_but_denied,
            mu.in_fav
        from
            metrics m
                join
            metrics_users mu on m.metric_id = mu.metric_id
        where
            m.event_id = ?;
    `,

}