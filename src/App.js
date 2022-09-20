import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Kmovie from "./Routes/kmovie";
import Link from "./Routes/link";

function App(){
  return(
      <BrowserRouter>
        <Routes>
          <Route path='/kmovie' element={<Kmovie/>}/>
          <Route path='/kmoviea' element={<Link/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App;