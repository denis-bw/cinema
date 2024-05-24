import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import Home from './pages/Home/Home';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import About from './pages/About/About';
import Profile from './pages/Profile/Profile';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import { AppWrapper } from './App.styled';

const test = import.meta.env.VITE_API_TEST;

function App() {
  console.log(test);
  return (
    <AppWrapper>
      
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movie/:id" element={<MovieDetails />} />
          <Route path="about" element={<About />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    
    </AppWrapper>
  );
}
export default App;
