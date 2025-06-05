'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type User = {
  id: string;
  name: string;
  email: string;
} | null;

type AuthContextType = {
  user: User;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mock authentication check
    // In a real app, this would check for an auth token and fetch user data
    const checkAuth = () => {
      // Check if we're on a protected route (dashboard)
      const isProtectedRoute = window.location.pathname.includes('/dashboard') ||
                              window.location.pathname.includes('/expenses') ||
                              window.location.pathname.includes('/reports') ||
                              window.location.pathname.includes('/advisor') ||
                              window.location.pathname.includes('/settings');
      
      if (isProtectedRoute && !localStorage.getItem('mock_auth')) {
        // Redirect to login
        window.location.href = '/login';
      } else if (localStorage.getItem('mock_auth')) {
        // Set user from mock data
        setUser({
          id: '1',
          name: 'John Doe',
          email: 'john.doe@example.com',
        });
      }
      
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);