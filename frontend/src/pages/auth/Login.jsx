import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../../store/authSlice';
import { authService } from '../../services/authService';
import { KeyRound, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import styles from './Auth.module.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const data = await authService.login(email, password);
            dispatch(login(data));
            navigate('/');
        } catch (err) {
            setError(err.message || 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.header}>
                    <div className={styles.iconWrapper}>
                        <ShieldCheck size={32} />
                    </div>
                    <h2>Welcome Back</h2>
                    <p>Sign in to access your banking dashboard</p>
                </div>

                {error && <div className={styles.error}>{error}</div>}

                <div className={styles.roleHint}>
                    <p><strong>Demo Roles:</strong></p>
                    <small>admin@bank.com (Admin) | emp@bank.com (Employee) | user@bank.com (Customer)</small>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <Mail className={styles.inputIcon} size={20} />
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <KeyRound className={styles.inputIcon} size={20} />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.8rem' }} disabled={loading}>
                        {loading ? 'Signing in...' : 'Sign In'} <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                    </button>
                </form>

                <div className={styles.footer}>
                    <p>New to BankSys? <Link to="/register">Create an account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
