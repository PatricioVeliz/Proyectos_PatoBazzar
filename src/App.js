import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListeContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { useState} from 'react'


function App() {
  const [page, setPage] = useState ('list')


  return (
    <>
    <NavBar/>
    {page ===  'list' && <ItemListContainer/>}
    {page === 'detail' && <ItemDetailContainer/>}
    </>
  );
}

export default App;
