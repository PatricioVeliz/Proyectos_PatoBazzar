import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListeContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  


  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer greeting="PatoBAZAR"/>}/>    
      <Route path='/category/:categoryId' element={<ItemListContainer greeting="Categorias"/>}/>    
      <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
      <Route path='*' element={<h1>PAGE NO FOUND</h1>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
