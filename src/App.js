import Header from './components/common/Header';

import { Switch, Route } from "react-router-dom";

import AwardsPage  from './components/pages/hr/awards/AwardsPage';

function App() {
  return (
    <> 
      <Header /> 

      <Switch>

       <Route path="/hr/awards" component={AwardsPage} />

      </Switch>
    </>
  );
}

export default App;
