import "./App.css";
import { Routes, Route } from "react-router";
import PageView from "./components/pages/pageView/PageView"
import Home from "./components/pages/Home";
import navLink from "./data/siteData";

function App() {
  
  return (
    <main className="container mx-auto">
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/' element={<PageView />}>
        {navLink.map(({ id, to, component: Component }) => {
          return (
            <Route key={id} path={to} element={<Component />} />
          );
        })}
        </Route>
      </Routes>
    </main>
  );
}

export default App;
