import { useGlobalState } from '../hooks/store';
export default function TransactionHistory() {
  const { state } = useGlobalState();
  console.log(state.transactions);
  
  return (
    <div>
      <h2>Transaction History</h2>
      <ul>
        {state.transactions.map((v) => (
          <li key={v.id}>
            id: {v.id}, token: {v.token}, to: {v.to}, from: {v.from}
          </li>
        ))}
      </ul>
    </div>
  );
}
