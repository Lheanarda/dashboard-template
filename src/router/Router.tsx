import Redirect from "@src/components/auth/Redirect";
import AuthFallback from "@src/components/fallback/AuthFallback";
import ContentFallback from "@src/components/fallback/ContentFallback";
import Progress from "@src/components/progress";
import Container from "@src/layouts/Container";
import NotFound from "@src/pages/NotFound";
import React, { Suspense, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import routes, { MainPageRoute } from "./routes";

const RouterComponent: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState<boolean>(true);
  return (
    <HashRouter>
      <Redirect mainRoute={MainPageRoute}>
        <Progress isAnimating={isAnimating} />
        <Routes>
          {routes.map(({ path, component: Component, isAuth }) => {
            if (isAuth) {
              return (
                <Route
                  key={path}
                  path={path}
                  element={
                    <Suspense
                      fallback={
                        <AuthFallback
                          isAnimating={isAnimating}
                          setIsAnimating={setIsAnimating}
                        />
                      }
                    >
                      <Component />
                    </Suspense>
                  }
                />
              );
            }
            return (
              <Route
                key={path}
                path={path}
                element={
                  <Suspense
                    fallback={
                      <ContentFallback
                        isAnimating={isAnimating}
                        setIsAnimating={setIsAnimating}
                      />
                    }
                  >
                    <Container>
                      <Component />
                    </Container>
                  </Suspense>
                }
              />
            );
          })}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Redirect>
    </HashRouter>
  );
};
export default RouterComponent;
