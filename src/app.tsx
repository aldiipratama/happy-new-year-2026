import { Routes, Route } from "react-router-dom";
import { BootPage } from "./pages/BootPage";
import { WorkPage } from "./pages/WorkPage";
import { DesignPage } from "./pages/DesignPage";
import { BuildPage } from "./pages/BuildPage";
import { Page2026 } from "./pages/Page2026";
import { PausePage } from "./pages/PausePage";
import { EndPage } from "./pages/EndPage";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<BootPage />} />
      <Route path="/work" element={<WorkPage />} />
      <Route path="/design" element={<DesignPage />} />
      <Route path="/build" element={<BuildPage />} />
      <Route path="/2026" element={<Page2026 />} />
      <Route path="/pause" element={<PausePage />} />
      <Route path="/end" element={<EndPage />} />
    </Routes>
  );
}
