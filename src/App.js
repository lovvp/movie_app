import React from "react";
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import Detail from './components/Detail'



function App() {
  //github에서 사용하기 router를 편하게 사용하기 위해서 HashRouter 를 씀
  //BrowserRouter는 그대신 /#/ 같은 요상한거 안들어감
  return (
    <HashRouter>
      {/* 렌더링할 Component가 들어가고 props가 들어간다. */}
      <Navigation />
      <Route path="/movie/:id" component={Detail}/>
      <Route exact path ="/" component = {Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  )
}

export default App;