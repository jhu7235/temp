import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import App from './App';
import AccountSummary from './AccountSummary';
import CreateAccount from './CreateAccount';
import TransactionForm from './TransactionForm';
import TransactionHistory from './TransactionHistory';

export default function RootRoutes() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/createAccount">Create Account</Link>
          </li>
          <li>
            <Link to="/accountSummary">Account Summary</Link>
          </li>
          <li>
            <Link to="/createTransaction">Transaction Form</Link>
          </li>
          <li>
            <Link to="/transactionHistory">Transaction History</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Routes> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Routes> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/createAccount" element={<CreateAccount />}></Route>
          <Route path="/accountSummary" element={<AccountSummary />}></Route>
          <Route path="/createTransaction" element={<TransactionForm />}></Route>
          <Route path="/transactionHistory" element={<TransactionHistory />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
