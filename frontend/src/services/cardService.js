export const cardService = {
    getCards: async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    credit: [
                        { id: 1, number: '4532 **** **** 9012', type: 'Visa Platinum', limit: 10000, balance: 250 },
                    ],
                    gift: [
                        { id: 1, number: '6011 **** **** 3321', brand: 'Amazon', balance: 50 },
                        { id: 2, number: '6011 **** **** 8842', brand: 'Starbucks', balance: 15 },
                    ]
                });
            }, 600);
        });
    }
};
