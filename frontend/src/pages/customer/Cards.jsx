import { useState, useEffect } from 'react';
import { cardService } from '../../services/cardService';
import { CreditCard, Gift, Plus } from 'lucide-react';

const Cards = () => {
    const [cards, setCards] = useState({ credit: [], gift: [] });

    useEffect(() => {
        cardService.getCards().then(setCards);
    }, []);

    return (
        <div className="animate-fade-in">
            <h1>My Cards</h1>

            <section style={{ marginBottom: '3rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <h2 style={{ margin: 0 }}>Credit Cards</h2>
                    <button className="btn btn-ghost" style={{ padding: '4px 8px' }}><Plus size={16} /></button>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                    {cards.credit.map(card => (
                        <div key={card.id} style={{
                            width: '320px',
                            height: '200px',
                            background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
                            borderRadius: '1rem',
                            padding: '1.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div style={{ position: 'absolute', right: '-20px', top: '-20px', fontSize: '8rem', opacity: '0.1', color: 'white' }}>
                                <CreditCard />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                                <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>BankSys</span>
                                <span>{card.type}</span>
                            </div>
                            <div>
                                <div style={{ fontSize: '1.4rem', letterSpacing: '2px', fontFamily: 'monospace', marginBottom: '1rem' }}>{card.number}</div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                                    <div>
                                        <div style={{ opacity: 0.8, fontSize: '0.8rem' }}>Limit</div>
                                        <div>${card.limit.toLocaleString()}</div>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <div style={{ opacity: 0.8, fontSize: '0.8rem' }}>Used</div>
                                        <div>${card.balance.toLocaleString()}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <h2 style={{ margin: 0 }}>Gift Cards</h2>
                    <button className="btn btn-ghost" style={{ padding: '4px 8px' }}><Plus size={16} /></button>
                </div>

                <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}>
                    {cards.gift.map(card => (
                        <div key={card.id} className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{
                                width: '50px',
                                height: '50px',
                                background: 'var(--color-accent)',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'black'
                            }}>
                                <Gift size={24} />
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>{card.brand}</div>
                                <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Balance: ${card.balance}</div>
                                <div style={{ fontSize: '0.8rem', fontFamily: 'monospace', opacity: 0.6 }}>{card.number}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Cards;
