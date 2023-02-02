import React, { useEffect, useState } from "react";
import './main.global.css';
import { hot } from "react-hot-loader/root"
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { rootReducer } from "./store/store";
import thunk from 'redux-thunk';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { Post } from "./shared/Post";
import { NoMatch } from "./shared/NoMatch";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

function AppComponent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [])

  return (
    <Provider store={store}>
      {mounted && (
        <Router>
          <Layout>
            <Header />
            <Content>
              <Switch>
                <Route exact path="/">
                  <Redirect to="/posts/" />
                </Route>

                <Route exact path="/auth/">
                  <Redirect to="/posts/" />
                </Route>

                <Route path="/posts/">
                  <CardsList />
                </Route>

                <Route >
                  <NoMatch />
                </Route>
              </Switch>
            </Content>

            <Route path="/posts/:postId">
              <Post />
            </Route>
          </Layout>
        </Router>
      )}
    </Provider>
  )
}

export const App = hot(() => <AppComponent />);
