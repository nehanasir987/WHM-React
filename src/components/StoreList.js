export default function StoreList({ stores }) {
  return (
    <ul>
      {stores.map((store) => (
        <li key={store.id}>
          {store.name} - {store.area} ({store.owner})
        </li>
      ))}
    </ul>
  );
}
