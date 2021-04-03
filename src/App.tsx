import { TransactionsProvider } from "./contexts/TransactionsContext";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";

import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <TransactionsProvider>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </TransactionsProvider>
  );
}