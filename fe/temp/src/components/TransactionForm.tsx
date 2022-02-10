import { SyntheticEvent, useState } from 'react';
import { useGlobalState } from '../hooks/store';
import { addTransaction } from '../hooks/store/actions';
import { Transaction } from '../hooks/store/types/state';

export default function TransactionForm() {
  const { state, dispatch } = useGlobalState();
  const [token, setToken] = useState<string>();
  const [fromAccount, setFromAccount] = useState<number>();
  const [toAccount, setToAccount] = useState<number>();

  function submit(e: any) {
    e.preventDefault();
    if (!fromAccount || !toAccount || !token) {
      throw new Error('missing form data');
    }
    const transaction: Transaction = {
      id: Math.random(),
      userId: state.user!.id,
      from: fromAccount,
      to: toAccount,
      token: token,
    };
    dispatch(addTransaction(transaction));
    console.log(state);
  }

  function handleTokenChange(v: SyntheticEvent<HTMLInputElement>) {
    setToken((v.target as HTMLInputElement).value);
  }

  function handleFromAccountChange(v: any) {
    setFromAccount(v.target.value as number);
  }

  function handleToAccountChange(v: any) {
    setToAccount(v.target.value as number);
  }

  return (
    <form onSubmit={submit}>
      <label>
        Token:
        <input type="text" onChange={handleTokenChange} />
      </label>
      <br></br>
      <label>
        From Account:
        <input type="number" onChange={handleFromAccountChange} />
      </label>
      <br></br>

      <label>
        To Account:
        <input type="number" onChange={handleToAccountChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
