import SignIn from './pages/cadastrar/index';
import LogIn from './pages/login/index';
import Feed from './pages/publicacao';
import * as F from './GlobalStyle';
import {Route, BrowserRouter, Routes} from 'react-router-dom';


function App() {
  return (
    <F.Container>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<LogIn/>}/>
          <Route exact path='/signup' element={<SignIn/>}/>
          <Route exact path='/feed' element={<Feed/>}/>
        </Routes>
        <F.GlobalStyle/>
      </BrowserRouter> 
    </F.Container>
  )

}
  export default App;
