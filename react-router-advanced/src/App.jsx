import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Post from './components/Post';
import ProtectedRoute from './components/ProtectedRoute';
import BlogPost from './components/BlogPost'; 
const isAuthenticated = true; // Simulate authentication stat


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/post/:postId" element={<Post />} />
      </Routes>
      <Route
  path="/profile/*"
  element={
    <ProtectedRoute isAuthenticated={isAuthenticated}>
      <Profile />
    </ProtectedRoute>
  }
      />
      
      <Routes>
        {/* Other routes */}
        <Route path="/blog/:id" element={<BlogPost />} /> {/* Dynamic route */}
      </Routes>

        <Routes>
        {/* Example protected route */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;
