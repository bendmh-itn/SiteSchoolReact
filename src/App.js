import './App.css';
import NavBar from './Components/Navbar';
import { HashRouter, Switch, Route } from "react-router-dom"
import pageEleves from './Pages/pageEleves';
import MyStoryBoard from './Pages/myStoryBoard';

function App() {
  return (
    <>
      <HashRouter>
        <NavBar />
        <main>
          <Switch>
              <Route path="/classe/:id" component={pageEleves} />
              <Route path="/classe/:id" component={pageEleves} />
              <Route path="/myStoryBoard" component={MyStoryBoard} />
          </Switch>
        </main>
      </HashRouter>
    </>
  );
}

export default App;
