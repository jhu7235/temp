import { useGlobalState } from '../hooks/store';
export default function AccountSummary() {
  const { state } = useGlobalState();

  return (
    <div>
      <h2>Account Summary</h2>
      <ul>
        {state.accounts.map((v) => (
          <li key={v.id}>
            id: {v.id}, value: {v.value}
          </li>
        ))}
      </ul>
    </div>
  );
}
