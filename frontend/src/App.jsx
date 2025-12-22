import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { restoreSession } from './store/authSlice';

// Layouts
import MainLayout from './layout/MainLayout';
import PrivateRoute from './components/PrivateRoute';

// Pages
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/Home';

// Customer Pages
import Transfer from './pages/customer/Transfer';
import Transactions from './pages/customer/Transactions';
import Loans from './pages/customer/Loans';
import Cards from './pages/customer/Cards';

// Employee Pages
import CustomerManagement from './pages/employee/CustomerManagement';
import LoanRequests from './pages/employee/LoanRequests';

// Admin Pages
import EmployeeManagement from './pages/admin/EmployeeManagement';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restoreSession());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />

            {/* Customer Routes */}
            <Route path="transfer" element={<Transfer />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="loans" element={<Loans />} />
            <Route path="cards" element={<Cards />} />

            {/* Employee Routes */}
            <Route path="customers" element={<CustomerManagement />} />
            <Route path="loan-requests" element={<LoanRequests />} />

            {/* Admin Routes */}
            <Route path="employees" element={<EmployeeManagement />} />
            <Route path="stats" element={<div>System Stats (Coming Soon)</div>} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
