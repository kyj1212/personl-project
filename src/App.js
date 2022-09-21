import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Link from './Routes/link'
import Kmovie from './Routes/kmovie'

const App = () => {
 return (
 <BrowserRouter>
    <Routes>
      <Route path="/" element={<Link/>}/>
      <Route path="/hook" element={<Kmovie/>}/>
    </Routes>
  </BrowserRouter>
)
}

export default App;