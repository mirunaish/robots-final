import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { ROUTES } from "./consts";
import HomePage from "./HomePage";
import Final from "./final/Final";
import FinalExplanation from "./final/FinalExplanation";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path={ROUTES.HOME} element={<Final />} /> */}
        <Route
          path={ROUTES.HOME}
          element={<Navigate to={ROUTES.FINAL_EXPLANATION} />}
        />

        {/* <Route path={ROUTES.MIDTERM} element={<HomePage />} /> */}

        <Route path={ROUTES.FINAL_EXPLANATION} element={<FinalExplanation />} />
        <Route path={ROUTES.FINAL_GAME} element={<Final />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
