import { useState } from 'react';
import './App.scss'
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import Wellcome from './logic/Wellcome';
import SmartHome from './logic/SmartHome';
import FeaturesForm from './logic/FeaturesForm'
import NotFound from './logic/NotFound';
import HomeIcon from '@mui/icons-material/Home';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import useFetch from './hooks/use-fetch';
import useAxios from './hooks/use-axios';

function App() {

  const [feature, setFeature] = useState({
    name: '',
    action: '',
    state: false,
    id: 0
  })

  const [users] = useFetch('https://reqres.in/api/users?page=2')
  const {data, loading, error} = useAxios('https://reqres.in/api/users?page=2')


  const updateFeatures = (newFeature) => {
    setFeature(newFeature)
  }

  const testLocalStorage = 'Acest text va aparea in local stoarge';
  const testSessionStorage = 'Acest text va aparea in session storage';

  const objectLocalStorage = {
    testLocalStorage: 'Acest text va aparea in local stoarge'
  }

  const setStorage = () => {
    localStorage.setItem('localStorageTest', JSON.stringify(objectLocalStorage))
    localStorage.setItem('localStorageTest2', 'testLocalStorage')
    sessionStorage.setItem('setSessionStorage', testSessionStorage)
    sessionStorage.setItem('setSessionStorage2', 'testSessionStorage')
  }

  const removeStorage = () => {
    // Metoda remove item sterge elementul cu cheia oferita
    // localStorage.removeItem('localStorageTest')
    // sessionStorage.removeItem('setSessionStorage')

    // Metoda clear sterge tot din locul in care e apelat
    localStorage.clear();
    sessionStorage.clear()
  }

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <HomeIcon/>
              <Link to={'/wellcome'}>Wellcome page</Link>
            </li>
            <li>
              <DevicesOtherIcon></DevicesOtherIcon>
              <NavLink to={'/smart-home'}>Use smart home app</NavLink>
            </li>
            <li>
              <AddToQueueIcon/>
              <NavLink to='/features-form'> Create new smart home features</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <button onClick={setStorage}>Set storage</button>
      <button onClick={removeStorage}>Remove storage</button>

      <div className='lights yellow'></div>

      <Routes>
        <Route path='/' element={<SmartHome newFeature={feature}/>}></Route>
        <Route path='/wellcome' element={<Wellcome />}></Route>
        <Route path='/smart-home' element={<SmartHome newFeature={feature} />}></Route>
        <Route path='/features-form' element={<FeaturesForm updateTheFeatures={updateFeatures} />}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>

      <h2>Data with use fetch</h2>
      {users && users.map(user => <div key={user.id}>{user.first_name} {user.last_name}</div>)}

      <h2>Data with axios</h2>
      {loading && <div>{loading}</div>}
      {error && <div>{error}</div>}
      {!loading && !error && data && data.map(user => <div key={user.id}>{user.first_name} {user.last_name}</div>)}
    </>
  )
}

export default App
