import Main from "./components/Main"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryCliente = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryCliente}>
      <Main />
    </QueryClientProvider>
  )
}

export default App
