import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { User, UserRole, Product, QuoteRequest, AuditLog } from './types';
import { INITIAL_PRODUCTS } from './constants';

// --- Contexts ---
interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

interface AuthContextType {
  user: User | null;
  login: (name: string, role: UserRole) => void;
  logout: () => void;
}

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

interface AppContextType {
  products: Product[];
  quotes: QuoteRequest[];
  cart: { productId: string; quantity: number }[];
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  submitQuote: (customer: { name: string; email: string; phone: string }) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;
  auditLogs: AuditLog[];
  addLog: (action: string, details: string, level?: string) => void;
  isSyncing: boolean;
}

const AppContext = React.createContext<AppContextType | undefined>(undefined);

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};

export const useApp = () => {
  const context = React.useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
};

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import Login from './views/Login';
import AdminDashboard from './views/Admin/Dashboard';
import SuperAdminDashboard from './views/SuperAdmin/Dashboard';

const App: React.FC = () => {
  const [view, setView] = useState<string>('home');
  const [user, setUser] = useState<User | null>(null);
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [quotes, setQuotes] = useState<QuoteRequest[]>([]);
  const [cart, setCart] = useState<{ productId: string; quantity: number }[]>([]);
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>([]);
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  const addLog = useCallback((action: string, details: string, level: string = 'INFO') => {
    const newLog: AuditLog = {
      id: Math.random().toString(36).substr(2, 9),
      userId: user?.name || 'GUEST',
      action: `${level}_${action}`,
      details,
      timestamp: new Date().toISOString(),
      ipAddress: '127.0.0.1'
    };
    setAuditLogs(prev => [newLog, ...prev].slice(0, 50));
  }, [user]);

  const login = (name: string, role: UserRole) => {
    setUser({ id: Date.now().toString(), email: `${name}@funsasuppliers.com`, name, role });
    addLog('AUTH', `System access granted to ${name}`, 'SECURE');
    setView(role === UserRole.SUPER_ADMIN ? 'super-admin' : role === UserRole.ADMIN ? 'admin' : 'home');
  };

  const logout = () => {
    if (user) addLog('AUTH', `Session terminated by ${user.name}`, 'AUTH');
    setUser(null);
    setView('home');
  };

  const updateProduct = (p: Product) => {
    setIsSyncing(true);
    setTimeout(() => {
      setProducts(prev => {
        const index = prev.findIndex(prod => prod.id === p.id);
        if (index > -1) {
          const updated = [...prev];
          updated[index] = { ...p, lastUpdated: new Date().toISOString() };
          return updated;
        }
        return [{ ...p, lastUpdated: new Date().toISOString() }, ...prev];
      });
      addLog('CATALOG', `Kernel Entity Updated: ${p.name}`, 'WRITE');
      setIsSyncing(false);
    }, 300);
  };

  const deleteProduct = (id: string) => {
    setIsSyncing(true);
    setTimeout(() => {
      setProducts(prev => prev.filter(p => p.id !== id));
      addLog('CATALOG', `Kernel Entity Purged: ${id}`, 'DELETE');
      setIsSyncing(false);
    }, 300);
  };

  const submitQuote = (customer: { name: string; email: string; phone: string }) => {
    setIsSyncing(true);
    setTimeout(() => {
      const items = cart.map(item => {
        const p = products.find(prod => prod.id === item.productId);
        return { productId: item.productId, quantity: item.quantity, name: p?.name || 'Medical Supply' };
      });
      
      const newQuote: QuoteRequest = {
        id: `QT-${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
        customerName: customer.name,
        customerEmail: customer.email,
        customerPhone: customer.phone,
        items,
        status: 'Pending',
        timestamp: new Date().toISOString()
      };

      setQuotes(prev => [newQuote, ...prev]);
      addLog('QUOTE', `New inquiry from ${customer.name}`, 'INBOUND');
      clearCart();
      setIsSyncing(false);
    }, 500);
  };

  const addToCart = (productId: string) => {
    setCart(prev => {
      const existing = prev.find(item => item.productId === productId);
      if (existing) return prev.map(item => item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item);
      return [...prev, { productId, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => setCart(prev => prev.filter(item => item.productId !== productId));
  const clearCart = () => setCart([]);

  const renderView = () => {
    if (['home', 'about', 'products', 'contact'].includes(view)) {
      return <Home currentSection={view} setView={setView} />;
    }
    
    return (
      <div className="pt-24 lg:pt-32 min-h-[calc(100vh-80px)]">
        {(() => {
          switch (view) {
            case 'login': return <Login onLogin={login} onCancel={() => setView('home')} />;
            case 'admin': return (user?.role === UserRole.ADMIN || user?.role === UserRole.SUPER_ADMIN) ? <AdminDashboard /> : <Login onLogin={login} onCancel={() => setView('home')} />;
            case 'super-admin': return user?.role === UserRole.SUPER_ADMIN ? <SuperAdminDashboard /> : <Login onLogin={login} onCancel={() => setView('home')} />;
            default: return <Home currentSection="home" setView={setView} />;
          }
        })()}
      </div>
    );
  };

  const authValue = useMemo(() => ({ user, login, logout }), [user]);
  const appValue = useMemo(() => ({ 
    products, quotes, cart, addToCart, removeFromCart, clearCart, submitQuote, updateProduct, deleteProduct, auditLogs, addLog, isSyncing
  }), [products, quotes, cart, auditLogs, isSyncing]);
  const themeValue = useMemo(() => ({ isDarkMode, toggleDarkMode }), [isDarkMode]);

  return (
    <ThemeContext.Provider value={themeValue}>
      <AuthContext.Provider value={authValue}>
        <AppContext.Provider value={appValue}>
          <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-500 relative selection:bg-brand-green selection:text-white">
            <Navbar currentView={view} setView={setView} />
            <main className="flex-grow">
              {renderView()}
            </main>
            <Footer setView={setView} />
          </div>
        </AppContext.Provider>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;