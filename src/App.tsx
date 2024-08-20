import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route index  element={<Navigate to="home"/>} /> */}
          <Route path="auth" element={<AuthPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
