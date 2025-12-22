import { useState, useEffect } from 'react';
import { loanService } from '../../services/loanService';
import { CheckCircle } from 'lucide-react';

const LoanRequests = () => {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [actionLoading, setActionLoading] = useState(null); // ID of the loan being processed
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchRequests();
    }, []);

    const fetchRequests = async () => {
        const data = await loanService.getPendingLoans();
        setRequests(data);
        setLoading(false);
    };

    const handleAction = async (id, status) => {
        setActionLoading(id);
        const response = await loanService.updateLoanStatus(id, status);

        if (response.success) {
            setMessage(response.message);
            setRequests(prev => prev.filter(req => req.id !== id));
            setTimeout(() => setMessage(''), 3000);
        }
        setActionLoading(null);
    };

    return (
        <div className="animate-fade-in">
            <h1>Loan Requests</h1>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Review and manage customer loan applications.</p>

            {message && (
                <div style={{
                    padding: '1rem',
                    borderRadius: '8px',
                    background: 'rgba(74, 222, 128, 0.1)',
                    color: 'var(--color-success)',
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}>
                    <CheckCircle size={20} />
                    {message}
                </div>
            )}

            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                {loading ? (
                    <div style={{ padding: '2rem', textAlign: 'center' }}>Loading requests...</div>
                ) : requests.length === 0 ? (
                    <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--color-text-muted)' }}>
                        <CheckCircle size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                        <p>No pending loan requests.</p>
                    </div>
                ) : (
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)' }}>
                                <th style={{ padding: '1rem' }}>Applicant</th>
                                <th style={{ padding: '1rem' }}>Loan Type</th>
                                <th style={{ padding: '1rem' }}>Amount</th>
                                <th style={{ padding: '1rem' }}>Date</th>
                                <th style={{ padding: '1rem', textAlign: 'center' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requests.map(req => (
                                <tr key={req.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                    <td style={{ padding: '1rem', fontWeight: 'bold' }}>{req.customerName}</td>
                                    <td style={{ padding: '1rem' }}>{req.type}</td>
                                    <td style={{ padding: '1rem' }}>${req.amount.toLocaleString()}</td>
                                    <td style={{ padding: '1rem', color: 'var(--color-text-muted)' }}>{req.date}</td>
                                    <td style={{ padding: '1rem', display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                                        <button
                                            className="btn"
                                            style={{ background: 'var(--color-success)', color: 'black', padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}
                                            onClick={() => handleAction(req.id, 'APPROVED')}
                                            disabled={actionLoading === req.id}
                                        >
                                            {actionLoading === req.id ? '...' : 'Approve'}
                                        </button>
                                        <button
                                            className="btn"
                                            style={{ background: 'rgba(248, 113, 113, 0.2)', color: 'var(--color-danger)', border: '1px solid var(--color-danger)', padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}
                                            onClick={() => handleAction(req.id, 'REJECTED')}
                                            disabled={actionLoading === req.id}
                                        >
                                            {actionLoading === req.id ? '...' : 'Reject'}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default LoanRequests;
