import './App.css';

import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import AuthPage from './pages/auth/AuthPage';
import NotFound from './pages/NotFound';
import UserProfilePage from './pages/profile/userProfile/UserProfilePage';
import Layout from './components/Layout';
import MyProfile from './pages/profile/MyProfile';
import Friends from './pages/friends/Friends';
import FriendRequestsList from './pages/friends/FriendRequestsList';
import SuggestedFriends from './pages/friends/SuggestedFriends';

function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/auth' element={<AuthPage />}></Route>
          <Route path='/profile/:id' element={<UserProfilePage></UserProfilePage>} />
          <Route path='/my-profile' element={<MyProfile />} />
          <Route path='/friends' element={<Friends />} />
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </Layout>
    </>
  )
}

export default App
