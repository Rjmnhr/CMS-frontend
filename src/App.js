import "./App.css";

import { AppContextProvider } from "./context/app-context";
import ContentData from "./data/content-data/content-data";
import { FeaturedData } from "./data/featured-data/featured-data";
import AppRouter from "./routes/app-router";

function App() {
  return (
    <div className="App">
      <div className="container">
        <AppContextProvider>
          <FeaturedData />
          <ContentData />
          <AppRouter />
        </AppContextProvider>
      </div>
    </div>
  );
}

export default App;
