import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Prompt-heaven",
  description: "Discover and share the best prompts on the web.",
};

const RootLayout = ({children}) => {
  return (
   <html lang="en">
    <body>
      <div className="main">
        <div className="gradient" />
      </div>
      <main className="app">
        <Nav />
        {children}
      </main>
    </body>
   </html>  
  )
}

export default RootLayout;