import { Button } from "./shadcnComponents/ui/button"
import { ThemeProvider } from "./shadcnComponents/theme-provider"
import { ModeToggle } from "./shadcnComponents/ModeToggle"

function App() {

  return (
    <>
    <ThemeProvider defaultTheme="system" storageKey="trisure-ui-theme">
      {children}
    </ThemeProvider>
    </>
  )
}

export default App
