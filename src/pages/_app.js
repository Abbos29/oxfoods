import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";
import ThemeToggle from "@/components/ui/ThemeToggle/ThemeToggle";
import "@/styles/globals.scss";

import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem={true}
        themes={['light', 'dark']}
      >

        <Header />

        <Component {...pageProps} />

        <Footer />

      </ThemeProvider>
    </>
  )
}