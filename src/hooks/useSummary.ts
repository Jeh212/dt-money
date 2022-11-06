import { useContext } from "react";
import { TransactionContext } from "../contexts/transaction-context";

export const useSummary = () => {
  const { transaction } = useContext(TransactionContext);

  const summary = transaction.reduce(
    (acc, trans) => {
      if (trans.type === "income") {
        acc.income += trans.price;
        acc.total += trans.price;
      } else {
        acc.outcome += trans.price;
        acc.total -= trans.price;
      }

      return acc;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );
  return summary;
};
