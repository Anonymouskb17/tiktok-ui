import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "~/pages/home/index.js";
import Follow from "~/pages/following/index.js";
import { publicRoutes, privateRoutes } from "./routes/index.js";
import DefaultLayout from "~/component/layout/defaultlayout/index.js";
import { Fragment } from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout == null ? Fragment : DefaultLayout;

            // let Layout = DefaultLayout;
            // if (route.layout) {
            //   Layout = route.layout;
            // } else if (route.layout == null) {
            //   Layout = Fragment;
            // }
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page></Page>
                  </Layout>
                }
              ></Route>
            );
          })}
          {/* <Route path="/" element={<Home />} />
          <Route path="/following" element={<Follow />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
