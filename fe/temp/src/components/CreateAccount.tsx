import { useGlobalState } from '../hooks/store';
import { addAccount } from '../hooks/store/actions';
import { Account } from '../hooks/store/types/state';

export default function CreateAccount() {
  const {state,dispatch} = useGlobalState();
  console.log(state);

  function _addAccount(){
    const account: Account  = {
      id: Math.random(),
      userId: state.user!.id,
      value: 0,
      token: []
    }
    dispatch(addAccount(account))
  }
  
  return (
    <div>
      <h2>Create Account</h2>
      <button onClick={_addAccount}>Create</button>
    </div>
  );
}
