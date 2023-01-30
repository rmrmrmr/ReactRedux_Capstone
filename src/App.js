import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import MyProfile from './pages/Profile';
import Rockets from './pages/Rockets';

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
            <Rockets />
)}
        />
      </Routes>
    </Router>
  );
}
