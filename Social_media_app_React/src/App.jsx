import './App.css';

import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import AuthPage from './pages/auth/AuthPage';
import NotFound from './pages/NotFound';
import UserProfilePage from './pages/profile/userProfile/UserProfilePage';
import Layout from './components/Layout';
import MyProfile from './pages/profile/MyProfile';
import MyFriends from './pages/friends/MyFriends';
import FriendRequestsList from './pages/friends/FriendRequestsList';
import SuggestedFriends from './pages/friends/SuggestedFriends';
import ChatBox from './pages/startingPage/newsfeed/chatbox/Chatbox';
import Events from './pages/events/Events';
import Pages from './pages/pagesSection/Pages';

function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/auth' element={<AuthPage />}></Route>
          <Route path='/profile/:id' element={<UserProfilePage></UserProfilePage>} />
          <Route path='/my-profile' element={<MyProfile />} />
          <Route path='/myFriends' element={<MyFriends />} />
          <Route path='/friendRequests' element={<FriendRequestsList />} />
          <Route path='/suggestedFriends' element={<SuggestedFriends />} />
          <Route path='/events' element={<Events/>}/>
          <Route path='/pages-section' element={<Pages />}/>
          <Route path='/chatbox' element={<ChatBox />} />
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </Layout>
    </>
  )
}

export default App
