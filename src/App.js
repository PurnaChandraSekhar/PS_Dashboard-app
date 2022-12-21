import { QueryClientProvider, QueryClient } from "react-query";

import AppRouter from "./Components/AppRouter/AppRouter";
import { Header, Sidebar } from "./Components/Molecules";

import { DashboardContextProvider } from "./Context/DashboardContext";

import "./Styles/App.css";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DashboardContextProvider>
        <Header />
        <section className="main-section">
          <Sidebar />
          <AppRouter />
        </section>
      </DashboardContextProvider>
    </QueryClientProvider>
  );
}

export default App;
