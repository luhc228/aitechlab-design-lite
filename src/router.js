import React, { Suspense } from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import path from 'path';
import Auth from '@/components/Auth';
import PageLoading from '@/components/PageLoading';
import routes from '@/config/routes';

const RouteItem = (props) => {
  const { redirect, path: routePath, component: Component, key, authorities } = props;
  if (redirect) {
    return (
      <Redirect
        exact
        key={key}
        from={routePath}
        to={redirect}
      />
    );
  }
  return (
    <Route
      key={key}
      render={componentProps => (
        <Auth authorities={authorities}>
          <Component {...componentProps} />
        </Auth>
      )}
      path={routePath}
    />
  );
};

const router = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route, id) => {
          const { component: RouteComponent, children, ...others } = route;
          return (
            <Route
              key={id}
              {...others}
              component={(props) => {
                return (
                  children ? (
                    <RouteComponent key={id} {...props}>
                      <Suspense fallback={<PageLoading />}>
                        <Switch>
                          {children.map((routeChild, idx) => {
                            const { path: childPath, ...restProps } = routeChild;
                            return RouteItem({
                              key: `${id}-${idx}`,
                              path: childPath && path.join(route.path, childPath),
                              ...restProps,
                            });
                          })}
                        </Switch>
                      </Suspense>

                    </RouteComponent>
                  ) : (
                      <>
                        {
                          RouteItem({
                            key: id,
                            ...route,
                          })
                        }
                      </>
                    )
                );
              }}
            />
          );
        })}
      </Switch>
    </Router>
  );
};

export default router;
