import { BrowserRouter } from "react-router-dom"
import { RouterProvider } from "./router"
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'

function App() {
	const queryClient = new QueryClient();

  	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<RouterProvider />
				<ToastContainer />
			</BrowserRouter>
		</QueryClientProvider>
  	)
}

export default App
