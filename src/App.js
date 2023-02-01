import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import MyProfile from './pages/Profile';
import RocketsList from './pages/Rockets';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={(
            <MyProfile />
)}
        />
        <Route
          path="/rockets"
          element={(
            <RocketsList />
)}
        />
      </Routes>
    </Router>
  );
}
