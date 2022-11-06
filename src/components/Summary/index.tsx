import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { useContext } from "react";
import { TransactionContext } from "../../contexts/transaction-context";
import { SummaryCard, SummaryContainer } from "./styles";
export const Summary = () => {
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

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>R$ {summary.income}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>R$ {summary.outcome}</strong>
      </SummaryCard>

      <SummaryCard variant={"green"}>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        <strong>R$ {summary.total}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
};
