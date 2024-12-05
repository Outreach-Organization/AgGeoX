import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";
import { Styles } from "../styles/styles";

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Header />
      <Routes>
        {routes.map((routeItem) => (
          <Route
            key={routeItem.path}
            path={routeItem.path}
            element={<routeItem.component />}
          />
        ))}
      </Routes>
      <Footer />
    </Suspense>
  );
};

export default Router;
