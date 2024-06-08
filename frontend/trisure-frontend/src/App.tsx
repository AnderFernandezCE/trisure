import { Home } from "./layout/Home"
import { ThemeProvider } from "./shadcnComponents/theme-provider"

function App() {

  return (
    <>
    <ThemeProvider defaultTheme="system" storageKey="trisure-ui-theme">
      <Home></Home>
    </ThemeProvider>
    </>
  )
}

export default App
