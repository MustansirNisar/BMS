import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/authSlice';
import { LogOut, LayoutDashboard, Send, History, CreditCard, Lock, Users } from 'lucide-react';
import styles from './MainLayout.module.css';

const MainLayout = () => {
    const { user } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    const getNavItems = () => {
        // Common items
        const items = [
            { label: 'Dashboard', path: '/', icon: LayoutDashboard },
        ];

        if (user?.role === 'customer') {
            items.push(
                { label: 'Transfer Funds', path: '/transfer', icon: Send },
                { label: 'Transactions', path: '/transactions', icon: History },
                { label: 'Loans', path: '/loans', icon: CreditCard }, // Using CreditCard icon for loans temporarily
                { label: 'Cards', path: '/cards', icon: CreditCard },
            );
        } else if (user?.role === 'employee') {
            items.push(
                { label: 'Customer Mgmt', path: '/customers', icon: Users },
                { label: 'Loan Requests', path: '/loan-requests', icon: CreditCard },
            );
        } else if (user?.role === 'admin') {
            items.push(
                { label: 'Employee Mgmt', path: '/employees', icon: Users },
                { label: 'System Stats', path: '/stats', icon: LayoutDashboard },
            );
        }

        return items;
    };

    return (
        <div className={styles.container}>
            <aside className={styles.sidebar}>
                <div className={styles.logo}>
                    <h2>BankSys</h2>
                    <span className={styles.badge}>{user?.role}</span>
                </div>
                <nav className={styles.nav}>
                    {getNavItems().map(item => (
                        <Link key={item.path} to={item.path} className={styles.navItem}>
                            <item.icon size={20} />
                            <span>{item.label}</span>
                        </Link>
                    ))}
                </nav>
                <button onClick={handleLogout} className={styles.logoutBtn}>
                    <LogOut size={20} />
                    <span>Logout</span>
                </button>
            </aside>
            <main className={styles.main}>
                <header className={styles.header}>
                    <h3>Welcome, {user?.name}</h3>
                </header>
                <div className={styles.content}>
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default MainLayout;
