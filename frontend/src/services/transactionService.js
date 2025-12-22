export const transactionService = {
    getHistory: async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { id: 1, type: 'DEBIT', amount: 150.00, date: '2025-12-20', description: 'Grocery Store' },
                    { id: 2, type: 'CREDIT', amount: 2500.00, date: '2025-12-15', description: 'Salary Deposit' },
                    { id: 3, type: 'DEBIT', amount: 45.00, date: '2025-12-14', description: 'Uber Trip' },
                    { id: 4, type: 'DEBIT', amount: 120.50, date: '2025-12-12', description: 'Utility Bill' },
                    { id: 5, type: 'DEBIT', amount: 300.00, date: '2025-12-10', description: 'ATM Withdrawal' },
                ]);
            }, 500);
        });
    },

    transferFunds: async (data) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    success: true,
                    message: `Successfully transferred $${data.amount} to ${data.recipient}`
                });
            }, 1000);
        });
    }
};
