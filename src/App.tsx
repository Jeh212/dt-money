import { ThemeProvider } from "styled-components";
import { TransactionProvider } from "./contexts/transaction-context";
import { Transaction } from "./pages/Transactions";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionProvider>
        <Transaction />
      </TransactionProvider>
    </ThemeProvider>
  );
};

export default App;
