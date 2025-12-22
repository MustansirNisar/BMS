import { useSelector } from 'react-redux';
import { CreditCard, Users, ShieldAlert, Activity, DollarSign, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const CustomerDashboard = ({ user }) => (
    <div className="animate-fade-in">
        <h1 style={{ marginBottom: '0.5rem' }}>Welcome back, {user?.name}</h1>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Here is your financial overview.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
            <div className="card" style={{ background: 'linear-gradient(135deg, var(--color-primary-dark), var(--color-primary))' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1.5rem' }}>
                    <div>
                        <p style={{ margin: 0, opacity: 0.8, fontSize: '0.9rem' }}>Total Balance</p>
                        <h2 style={{ margin: 0, fontSize: '2.5rem' }}>$12,450.00</h2>
                    </div>
                    <div style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.2)', borderRadius: '50%' }}>
                        <DollarSign color="white" />
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <Link to="/transfer" className="btn" style={{ background: 'white', color: 'var(--color-primary)', border: 'none', flex: 1 }}>Send Money</Link>
                    <Link to="/transactions" className="btn" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: 'none', flex: 1 }}>History</Link>
                </div>
            </div>

            <div className="card">
                <h3>Quick Actions</h3>
                <div style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.5rem', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.05)' }}>
                        <CreditCard size={20} color="var(--color-accent)" />
                        <div>
                            <div style={{ fontWeight: 'bold' }}>Credit Card Bill</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Due in 5 days</div>
                        </div>
                        <button className="btn btn-ghost" style={{ marginLeft: 'auto' }}>Pay</button>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.5rem', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.05)' }}>
                        <Briefcase size={20} color="var(--color-success)" />
                        <div>
                            <div style={{ fontWeight: 'bold' }}>Loan Offer</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Pre-approved for $50k</div>
                        </div>
                        <Link to="/loans" className="btn btn-ghost" style={{ marginLeft: 'auto' }}>View</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const EmployeeDashboard = ({ user }) => (
    <div className="animate-fade-in">
        <h1>Staff Dashboard</h1>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Shift: Morning | Branch: Main St.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            <div className="card">
                <div style={{ color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Pending Approvals</div>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-warning)' }}>14</div>
            </div>
            <div className="card">
                <div style={{ color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Active Tickets</div>
                <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>5</div>
            </div>
            <div className="card">
                <div style={{ color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>New Customers</div>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-success)' }}>+12</div>
            </div>
        </div>

        <h3>Urgent Tasks</h3>
        <div className="card" style={{ marginTop: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <ShieldAlert size={20} color="var(--color-danger)" />
                <div>Verify KYC for Account #9921</div>
                <button className="btn btn-primary" style={{ marginLeft: 'auto', padding: '4px 12px' }}>Review</button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem' }}>
                <Activity size={20} color="var(--color-primary-light)" />
                <div>Approve High Value Transaction ($50,000)</div>
                <button className="btn btn-primary" style={{ marginLeft: 'auto', padding: '4px 12px' }}>Review</button>
            </div>
        </div>
    </div>
);

const AdminDashboard = ({ user }) => (
    <div className="animate-fade-in">
        <h1>System Overview</h1>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>System Status: <span style={{ color: 'var(--color-success)' }}>Operational</span></p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div className="card" style={{ background: '#0f172a' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <div style={{ padding: '0.5rem', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '8px' }}>
                        <Users size={24} color="#38bdf8" />
                    </div>
                    <div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>1,240</div>
                        <div style={{ color: 'var(--color-text-muted)' }}>Total Users</div>
                    </div>
                </div>
                <div style={{ height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{ width: '70%', height: '100%', background: '#38bdf8' }}></div>
                </div>
            </div>

            <div className="card" style={{ background: '#0f172a' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <div style={{ padding: '0.5rem', background: 'rgba(168, 85, 247, 0.1)', borderRadius: '8px' }}>
                        <Briefcase size={24} color="#a855f7" />
                    </div>
                    <div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>45</div>
                        <div style={{ color: 'var(--color-text-muted)' }}>Employees</div>
                    </div>
                </div>
                <div style={{ height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{ width: '90%', height: '100%', background: '#a855f7' }}></div>
                </div>
            </div>

            <div className="card" style={{ background: '#0f172a' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <div style={{ padding: '0.5rem', background: 'rgba(34, 197, 94, 0.1)', borderRadius: '8px' }}>
                        <Activity size={24} color="#22c55e" />
                    </div>
                    <div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>99.9%</div>
                        <div style={{ color: 'var(--color-text-muted)' }}>Uptime</div>
                    </div>
                </div>
                <div style={{ height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{ width: '99%', height: '100%', background: '#22c55e' }}></div>
                </div>
            </div>
        </div>

        <div style={{ marginTop: '2rem' }}>
            <h3>Server Logs</h3>
            <div className="card" style={{ fontFamily: 'monospace', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                <p><span style={{ color: 'var(--color-success)' }}>[INFO]</span> 10:42 AM: Deployment successful.</p>
                <p><span style={{ color: 'var(--color-warning)' }}>[WARN]</span> 10:40 AM: High latency detected in Region US-East.</p>
                <p><span style={{ color: 'var(--color-success)' }}>[INFO]</span> 10:15 AM: Database backup completed.</p>
            </div>
        </div>
    </div>
);

const Home = () => {
    const { user } = useSelector(state => state.auth);

    if (user?.role === 'admin') return <AdminDashboard user={user} />;
    if (user?.role === 'employee') return <EmployeeDashboard user={user} />;
    return <CustomerDashboard user={user} />;
};

export default Home;
