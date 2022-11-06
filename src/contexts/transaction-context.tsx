import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

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

export const TransactionContext = createContext<TransactionContextType>(
  {} as TransactionContextType
);

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transaction, setTransaction] = useState<Transaction[]>([]);

  async function fetchTransaction(query?: string) {
    const url = new URL("http://localhost:3000/transaction");
    if (query) {
      url.searchParams.append("q", query);
    }
    const response = await fetch(url);
    const data = await response.json();
    setTransaction(data);
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
