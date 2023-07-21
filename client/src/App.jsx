import { BrowserRouter, Routes, Route } from "react-router-dom";
import Campaign from "./pages/Campaign";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="campaign/:slug" element={<Campaign />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

