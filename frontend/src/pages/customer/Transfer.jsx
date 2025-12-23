import { useState } from 'react';
import { transactionService } from '../../services/transactionService';
import { Send, DollarSign, UserCheck } from 'lucide-react';

const Transfer = () => {
    const [formData, setFormData] = useState({ recipient: '', amount: '', note: '' });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess('');

        await transactionService.transferFunds(formData);

        setSuccess(`Traansfer of $${formData.amount} successful!`);
        setFormData({ recipient: '', amount: '', note: '' });
        setLoading(false);

        setTimeout(() => setSuccess(''), 3000);
    };

    return (
        <div className="animate-fade-in">
            <h1>Transfer Funds</h1>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Send money securely to anyone.</p>

            <div className="card" style={{ maxWidth: '600px' }}>
                {success && (
                    <div style={{
                        background: 'var(--color-success)',
                        color: 'white',
                        padding: '1rem',
                        borderRadius: 'var(--radius-md)',
                        marginBottom: '1rem',
                        opacity: 0.9
                    }}>
                        {success}
                    </div>
                )}

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>Recipient Account / Email</label>
                        <div style={{ position: 'relative' }}>
                            <UserCheck size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                            <input
                                type="text"
                                required
                                placeholder="Enter recipient..."
                                value={formData.recipient}
                                onChange={e => setFormData({ ...formData, recipient: e.target.value })}
                                style={{
                                    width: '80%',
                                    padding: '0.8rem 1rem 0.8rem 3rem',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: 'var(--radius-md)',
                                    color: 'var(--color-text-muted)'
                                }}
                            />
                        </div>
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>Amount</label>
                        <div style={{ position: 'relative' }}>
                            <DollarSign size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                            <input
                                type="number"
                                required
                                min="1"
                                placeholder="0.00"
                                value={formData.amount}
                                onChange={e => setFormData({ ...formData, amount: e.target.value })}
                                style={{
                                    width: '80%',
                                    padding: '0.8rem 1rem 0.8rem 3rem',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: 'var(--radius-md)',
                                    color: 'white'
                                }}
                            />
                        </div>
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>Note (Optional)</label>
                        <textarea
                            rows="3"
                            placeholder="What is this for?"
                            value={formData.note}
                            onChange={e => setFormData({ ...formData, note: e.target.value })}
                            style={{
                                width: '80%',
                                padding: '0.8rem',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: 'var(--radius-md)',
                                color: 'white',
                                fontFamily: 'inherit'
                            }}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary" disabled={loading} style={{ marginTop: '1rem' }}>
                        {loading ? 'Processing...' : 'Send Money'} <Send size={18} style={{ marginLeft: '8px' }} />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Transfer;

