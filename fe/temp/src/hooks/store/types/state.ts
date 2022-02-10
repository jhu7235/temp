export type User = {
  id: string;
};

export type Account = {
  // FIXME: use uuid
  id: number;
  userId: string;
  value: number;
  token: string[];
};

export type Transaction = {
  // FIXME: use uuid
  id: number;
  userId: string;
  from: number;
  to: number;
  token: string;
};

export type AppState = {
  user: User | null;
  accounts: Account[];
  transactions: Transaction[];
};
