import { Navigate, Route, Routes, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import Adidas from './pages/Adidas/Adidas';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import Nike from './pages/Nike/Nike';
import Profile from './pages/Profile/Profile';
import SearchResults from './pages/SearchResults/SearchResults';
import ShoesDetail from './pages/ShoesDetail/ShoesDetail';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Vans from './pages/Vans/Vans';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import ProfileTemplate from './templates/ProfileTemplate/ProfileTemplate';
import UserTemplate from './templates/UserTemplate/UserTemplate';
import history from './utils/libs/history';

function App() {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path='' element={<HomeTemplate />}>
          <Route index path='' element={<Home />}></Route>
          <Route path='home' element={<Home />}></Route>
          <Route path='trangchu' element={<Home />}></Route>
          <Route path='adidas' element={<Adidas />}></Route>
          <Route path='nike' element={<Nike />}></Route>
          <Route path='vansconverse' element={<Vans />}></Route>
          <Route path='cart' element={<Cart />}></Route>
          <Route path='ketquatimkiem' element={<SearchResults />}>
            <Route path=':keyword'></Route>
          </Route>
          <Route path='chitietsanpham' element={<ShoesDetail />}>
            <Route path=':id'></Route>
          </Route>
          <Route path='*' element={<Navigate to='' />}></Route>
        </Route>
        <Route path='' element={<UserTemplate />}>
          <Route path='signin' element={<SignIn />}></Route>
          <Route path='signup' element={<SignUp />}></Route>
        </Route>
        <Route path='' element={<ProfileTemplate />}>
          <Route path='profile' element={<Profile />}></Route>
        </Route>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
