import { useState, useEffect } from 'react';
import { userService } from '../../services/userService';
import { User, MoreHorizontal, Ban, CheckCircle } from 'lucide-react';

const CustomerManagement = () => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        userService.getCustomers().then(data => {
            setCustomers(data);
            setLoading(false);
        });
    }, []);

    const toggleStatus = async (id, currentStatus) => {
        // Optimistic update
        setCustomers(customers.map(c => c.id === id ? { ...c, status: c.status === 'Active' ? 'Suspended' : 'Active' } : c));
        await userService.toggleStatus(id, currentStatus);
    };

    return (
        <div className="animate-fade-in">
            <h1>Customer Management</h1>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Manage customer accounts and access.</p>

            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)' }}>
                            <th style={{ padding: '1rem', color: 'var(--color-text-muted)' }}>Customer</th>
                            <th style={{ padding: '1rem', color: 'var(--color-text-muted)' }}>Email</th>
                            <th style={{ padding: '1rem', color: 'var(--color-text-muted)' }}>Balance</th>
                            <th style={{ padding: '1rem', color: 'var(--color-text-muted)' }}>Status</th>
                            <th style={{ padding: '1rem', color: 'var(--color-text-muted)', textAlign: 'right' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map(c => (
                            <tr key={c.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '1rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                        <div style={{ width: '32px', height: '32px', background: 'var(--color-primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <User size={16} color="white" />
                                        </div>
                                        {c.name}
                                    </div>
                                </td>
                                <td style={{ padding: '1rem', color: 'var(--color-text-muted)' }}>{c.email}</td>
                                <td style={{ padding: '1rem' }}>${c.balance.toLocaleString()}</td>
                                <td style={{ padding: '1rem' }}>
                                    <span style={{
                                        padding: '4px 8px',
                                        borderRadius: '12px',
                                        fontSize: '0.8rem',
                                        background: c.status === 'Active' ? 'rgba(74, 222, 128, 0.1)' : 'rgba(248, 113, 113, 0.1)',
                                        color: c.status === 'Active' ? 'var(--color-success)' : 'var(--color-danger)'
                                    }}>
                                        {c.status}
                                    </span>
                                </td>
                                <td style={{ padding: '1rem', textAlign: 'right' }}>
                                    <button
                                        className="btn btn-ghost"
                                        title={c.status === 'Active' ? 'Suspend' : 'Activate'}
                                        onClick={() => toggleStatus(c.id, c.status)}
                                        style={{ color: c.status === 'Active' ? 'var(--color-danger)' : 'var(--color-success)' }}
                                    >
                                        {c.status === 'Active' ? <Ban size={18} /> : <CheckCircle size={18} />}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CustomerManagement;
