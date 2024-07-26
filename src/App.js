import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Comments from './components/Comments';
import Users from './components/Users';
import Todos from './components/Todos';
import Photos from './components/Photos';
import Posts from './components/Posts';
import Navbar from './components/Navbar';
import Products from './components/Products';
import NotFoundPage from './components/Notfound';
import Error404 from './components/Error404';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* navbar goes here */}
        <Navbar/>
        <Routes>
           <Route path="/comments" element={<Comments/>}/>
           <Route path="/users" element={<Users/>}/>
           <Route path="/todos" element={<Todos/>}/>
           <Route path="/photos" element={<Photos/>}/>
           <Route path="/posts" element={<Posts/>}/>
           <Route path="/products" element={<Products/>}/> 
           {/* <Route path="*" element={<NotFoundPage/>}/>  */}
           <Route path="*" element={<Error404/>}/> 




        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
