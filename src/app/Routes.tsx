import { URLS } from "@/utils/urls";
import { BrowserRouter, Routes as ReactRoutes, Route } from "react-router-dom";
import { History } from "./Pages/History";
import { Home } from "./Pages/Home";
import { Upload } from "./Pages/Upload";

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path={URLS.UPLOAD} element={<Upload />} />
        <Route path={URLS.HISTORY} element={<History />} />
        <Route path={URLS.HISTORY} element={<History />} />
        <Route path="*" element={<Home />} />
      </ReactRoutes>
    </BrowserRouter>
  );
};
