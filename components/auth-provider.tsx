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
  login: (email: string, password: string) => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
  login: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      const mockAuth = localStorage.getItem('mock_auth');
      if (mockAuth) {
        try {
          const userData = JSON.parse(mockAuth);
          setUser(userData);
        } catch (e) {
          localStorage.removeItem('mock_auth');
        }
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const login = (email: string, password: string) => {
    // Mock login - in a real app this would validate credentials
    const userData = {
      id: '1',
      name: 'John Doe',
      email: email,
    };
    localStorage.setItem('mock_auth', JSON.stringify(userData));
    setUser(userData);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);