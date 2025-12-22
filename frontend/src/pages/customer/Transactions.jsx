import { useState, useEffect } from 'react';
import { transactionService } from '../../services/transactionService';
import { ArrowDownLeft, ArrowUpRight, Search } from 'lucide-react';

const Transactions = () => {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetch = async () => {
            const data = await transactionService.getHistory();
            setTransactions(data);
            setLoading(false);
        };
        fetch();
    }, []);

    return (
        <div className="animate-fade-in">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1>Transaction History</h1>
                <div style={{ position: 'relative' }}>
                    <Search size={18} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-icon)' }} />
                    <input
                        type="text"
                        placeholder="Search transactions..."
                        style={{
                            padding: '0.5rem 1rem 0.5rem 2.5rem',
                            borderRadius: '2rem',
                            border: '1px solid rgba(255,255,255,0.1)',
                            background: 'rgba(255,255,255,0.05)',
                            color: 'white'
                        }}
                    />
                </div>
            </div>

            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                {loading ? (
                    <div style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>
                ) : (
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)' }}>
                                <th style={{ padding: '1rem', fontWeight: 500, color: 'var(--color-text-muted)' }}>Description</th>
                                <th style={{ padding: '1rem', fontWeight: 500, color: 'var(--color-text-muted)' }}>Date</th>
                                <th style={{ padding: '1rem', fontWeight: 500, color: 'var(--color-text-muted)' }}>Type</th>
                                <th style={{ padding: '1rem', fontWeight: 500, color: 'var(--color-text-muted)', textAlign: 'right' }}>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map(tx => (
                                <tr key={tx.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                    <td style={{ padding: '1rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                            <div style={{
                                                padding: '8px',
                                                borderRadius: '50%',
                                                background: tx.type === 'CREDIT' ? 'rgba(74, 222, 128, 0.1)' : 'rgba(248, 113, 113, 0.1)',
                                                color: tx.type === 'CREDIT' ? 'var(--color-success)' : 'var(--color-danger)'
                                            }}>
                                                {tx.type === 'CREDIT' ? <ArrowDownLeft size={16} /> : <ArrowUpRight size={16} />}
                                            </div>
                                            {tx.description}
                                        </div>
                                    </td>
                                    <td style={{ padding: '1rem', color: 'var(--color-text-muted)' }}>{tx.date}</td>
                                    <td style={{ padding: '1rem' }}>
                                        <span style={{
                                            fontSize: '0.8rem',
                                            padding: '2px 8px',
                                            borderRadius: '12px',
                                            background: 'rgba(255,255,255,0.05)',
                                            border: '1px solid rgba(255,255,255,0.1)'
                                        }}>
                                            {tx.type}
                                        </span>
                                    </td>
                                    <td style={{ padding: '1rem', textAlign: 'right', fontWeight: 'bold', color: tx.type === 'CREDIT' ? 'var(--color-success)' : 'white' }}>
                                        {tx.type === 'CREDIT' ? '+' : '-'}${tx.amount.toFixed(2)}
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

export default Transactions;
