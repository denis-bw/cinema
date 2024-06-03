import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import Home from './pages/Home/Home';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import About from './pages/About/About';
import Profile from './pages/Profile/Profile';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import Login from './pages/Login/Login';
import Admin from './pages/Admin/Admin';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import { AppWrapper } from './App.styled';
import { AuthProvider } from 'components/Auth/Auth'
const test = import.meta.env.VITE_API_TEST;

function App() {
  // console.log(test);
  return (
    <AuthProvider>
      <AppWrapper>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="movie/:id" element={<MovieDetails />} />
            <Route path="about" element={<About />} />
            <Route path="profile" element={<Profile />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="admin" element={<Admin />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </AppWrapper>
    </AuthProvider>
  );
}
export default App;
