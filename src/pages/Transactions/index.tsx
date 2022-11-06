import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionContext } from "../../contexts/transaction-context";
import { SearchForm } from "./components/SearchForm";

import {
  PriceHighlight,
  TransactionContainer,
  TransactionsTable,
} from "./styles";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

const Transaction = () => {
  const { transaction } = useContext(TransactionContext);

  return (
    <div>
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transaction.map((trans) => {
              return (
                <tr key={trans.id}>
                  <td width="50%">{trans.description}</td>
                  <td>
                    <PriceHighlight variant={trans.type}>
                      {trans.price}
                    </PriceHighlight>
                  </td>
                  <td>{trans.category}</td>
                  <td>{trans.createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionContainer>
    </div>
  );
};

export { Transaction };
