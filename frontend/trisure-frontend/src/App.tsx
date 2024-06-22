import { Home } from "./layout/Home"
import { Transactions } from "./layout/Transactions"
import { ThemeProvider } from "./shadcnComponents/theme-provider"

function App() {

  return (
    <>
    <ThemeProvider defaultTheme="system" storageKey="trisure-ui-theme">
      {/* <Home></Home> */}
      <Transactions></Transactions>
    </ThemeProvider>
    </>
  )
}

export default App
