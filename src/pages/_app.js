import Header from "@/components/layout/Header/Header";
import ThemeToggle from "@/components/ui/ThemeToggle/ThemeToggle";
import "@/styles/globals.scss";

import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Header />

      <Component {...pageProps} />

      <ThemeToggle />

    </ThemeProvider>
  )
}