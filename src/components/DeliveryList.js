export default function DeliveryList({ deliveries }) {
  return (
    <ul>
      {deliveries.map((d) => (
        <li key={d.id}>
          {d.salesman} delivered {d.qty} {d.product} to Store #{d.store}
        </li>
      ))}
    </ul>
  );
}
