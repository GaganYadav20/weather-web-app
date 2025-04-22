
import { BrowserRouter } from "react-router-dom";
import "./App.css"
import Layout from "./components/ui/layout";
import { ThemeProvider } from "./context/theme-provider";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Layout>
          hello
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
