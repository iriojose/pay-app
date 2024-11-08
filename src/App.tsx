import { BrowserRouter } from "react-router-dom"
import { RouterProvider } from "./router"
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
	const queryClient = new QueryClient();

  	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<RouterProvider />
			</BrowserRouter>
		</QueryClientProvider>
  	)
}

export default App
