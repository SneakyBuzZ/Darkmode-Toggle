import Card from "./components/Card"
import { ThemeProvider } from "./contexts/themeContext"
import { useEffect, useState } from "react"
import ThemeBtn from "./components/ThemeBtn"

function App() {

  const [theme, settheme] = useState("light")

  const darkmode = () => {
    settheme("dark");
  }

  const lightmode = () => {
    settheme("light");
  }

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(theme);
  }, [theme])

  return (
    <>
      <ThemeProvider value={{ theme, darkmode, lightmode }}>
        <div className="containerMain flex justify-center flex-col">
          <ThemeBtn />
          <Card />
        </div>
      </ThemeProvider>

    </>
  )
}

export default App
