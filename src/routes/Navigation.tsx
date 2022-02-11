import React, { Suspense } from "react";
import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";

import { routes } from "./routes";

const Navigation = () => {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <div>
          <nav>
            <img src="" alt="" />
            <ul>
              {routes.map((route) => (
                <li key={route.to}>
                  <NavLink to={route.to}>{route.name}</NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map((route) => (
              <Route
                key={route.to}
                path={route.path}
                element={<route.Component />}
              />
            ))}

            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

export default Navigation;
