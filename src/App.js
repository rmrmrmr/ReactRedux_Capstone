import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import MyProfile from './pages/Profile';

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
      </Routes>
    </Router>
  );
}
