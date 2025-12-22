import { useState, useEffect } from 'react';
import { loanService } from '../../services/loanService';
import { Briefcase, CheckCircle, Calculator } from 'lucide-react';

const Loans = () => {
    const [loanTypes] = useState(loanService.getLoanTypes());
    const [activeLoan, setActiveLoan] = useState(null);
    const [myLoans, setMyLoans] = useState([]);
    const [amount, setAmount] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');

    useEffect(() => {
        loanService.getMyLoans().then(setMyLoans);
    }, []);

    const handleApply = async (type) => {
        setLoading(true);
        await loanService.applyForLoan({ type: type.id, amount });
        setSuccess(`Application for ${type.name} submitted!`);
        setTimeout(() => {
            setSuccess('');
            setActiveLoan(null);
            setAmount('');
        }, 2000);
        setLoading(false);
    };

    return (
        <div className="animate-fade-in">
            <h1>Loans</h1>
            <p style={{ color: 'var(--color-text-muted)' }}>We help you achieve your dreams.</p>

            {/* Existing Loans */}
            {myLoans.length > 0 && (
                <div style={{ marginTop: '2rem' }}>
                    <h3>My Active Loans</h3>
                    <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                        {myLoans.map(loan => (
                            <div key={loan.id} className="card">
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                    <strong>{loan.type}</strong>
                                    <span style={{ color: 'var(--color-success)', textTransform: 'uppercase', fontSize: '0.8rem' }}>{loan.status}</span>
                                </div>
                                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>${loan.amount.toLocaleString()}</div>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Next Payment: {loan.nextPayment}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Loan Offers */}
            <h3 style={{ marginTop: '3rem' }}>Available Loan Offers</h3>
            <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                {loanTypes.map(type => (
                    <div key={type.id} className="card" style={{ border: activeLoan === type.id ? '1px solid var(--color-primary)' : '' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h4>{type.name}</h4>
                            <Briefcase size={20} color="var(--color-primary)" />
                        </div>
                        <p style={{ margin: '1rem 0' }}>Rate: <strong>{type.rate}</strong> <br /> Max: <strong>${type.max.toLocaleString()}</strong></p>

                        {activeLoan === type.id ? (
                            <div className="animate-fade-in">
                                {success ? (
                                    <div style={{ color: 'var(--color-success)', padding: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <CheckCircle size={16} /> {success}
                                    </div>
                                ) : (
                                    <div>
                                        <input
                                            type="number"
                                            placeholder="Amount needed"
                                            value={amount}
                                            onChange={e => setAmount(e.target.value)}
                                            style={{
                                                width: '100%',
                                                padding: '0.5rem',
                                                marginBottom: '0.5rem',
                                                background: 'rgba(0,0,0,0.2)',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                color: 'white'
                                            }}
                                        />
                                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                                            <button className="btn btn-primary" onClick={() => handleApply(type)} disabled={loading || !amount}>
                                                {loading ? 'Submitting...' : 'Confirm'}
                                            </button>
                                            <button className="btn btn-ghost" onClick={() => setActiveLoan(null)}>Cancel</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => setActiveLoan(type.id)}>Apply Now</button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Loans;
