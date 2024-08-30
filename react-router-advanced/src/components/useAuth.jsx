import { useState } from 'react';

export function useAuth() {
  // Mock authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Example function to simulate login
  const login = () => setIsAuthenticated(true);

  // Example function to simulate logout
  const logout = () => setIsAuthenticated(false);

  return { isAuthenticated, login, logout };
}
