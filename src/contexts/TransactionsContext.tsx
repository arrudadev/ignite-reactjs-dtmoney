import { createContext, ReactNode, useEffect, useState } from 'react';

import { api } from '../services/api';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type NewTransaction = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsContextProps {
  transactions: Transaction[];
  createTransaction: (transaction: NewTransaction) => Promise<void>;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext<TransactionsContextProps>({} as TransactionsContextProps);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('/transactions')
      .then(response => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(newTransaction: NewTransaction) {
    const response = await api.post('/transactions', newTransaction);

    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }
  
  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  );
}