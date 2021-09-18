import { Route, Switch, useLocation } from "react-router";
import Sidebar from "./Sidebar";
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Discography from "./Pages/Discography";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";

const Pages = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(../images/skov2.png);
  height: 100vh;
  width: 100%;
  background-size: cover;

  @media (max-width: 1000px) {
    background-position: 20% 50%;
  }

 

  h1 {
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right, #f42e35 30%, #1b1b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;




function App() {
  const location = useLocation();
  return (
    <>
      <Sidebar />

        <Pages>
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={Home} />
              <Route path="/team" component={Team} />
              <Route path="/contact" component={Contact} />
              <Route path="/about" component={About} />
              <Route path="/discography" component={Discography} />
            </Switch>
          </AnimatePresence>
        </Pages>
    
      
    </>
  );
}

export default App;
