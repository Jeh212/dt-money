import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../lib/axios";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionContextType {
  transaction: Transaction[];
  fetchTransaction: (query: string) => Promise<void>;
}

interface TransactionProviderProps {
  children: ReactNode;
}

interface CreateTransaction {
  description: string;
  price: number;
  category: string;
  type: string;
}

export const TransactionContext = createContext<TransactionContextType>(
  {} as TransactionContextType
);

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transaction, setTransaction] = useState<Transaction[]>([]);

  async function fetchTransaction(query?: string) {
    const { data } = await api.get("transaction", {
      params: {
        q: query,
      },
    });
    setTransaction(data);
  }

  async function createTransaction({
    category,
    description,
    price,
    type,
  }: CreateTransaction) {
    const response = await api.post("transaction", {
      description,
      price,
      category,
      type,
      createdAt: new Date(),
    });

    setTransaction(() => [...state, response.data]);
  }

  useEffect(() => {
    fetchTransaction();
  }, []);

  return (
    <TransactionContext.Provider value={{ transaction, fetchTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}
