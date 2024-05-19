

function MetricSales ({metricSales}:{metricSales: IMetricSales}) {
  return (
    <div>
      <ul>
        <li>
          <h3>{metricSales.ticket_name}</h3>
          <ul>
            <li>
              <h3>Boletos vendidos: {metricSales.sold}</h3>
            </li>
            <li>
              <h3>Cortesías: {metricSales.courtesies}</h3>
            </li>
            <li>
              <h3>Cancelados: {metricSales.cancelled}</h3>
            </li>
            <li>
              <h3>No reclamados: {metricSales.not_claimed}</h3>
            </li>
            <li>
              <h3>Precio: {metricSales.price}</h3>
            </li>
            <li>
              <h3>Total: {metricSales.total}</h3>
            </li>
          </ul>

        </li>

      </ul>
    </div>
  )
}

export {
  MetricSales
}