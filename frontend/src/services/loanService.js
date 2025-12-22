export const loanService = {
    getLoanTypes: () => {
        return [
            { id: 'personal', name: 'Personal Loan', rate: '11.5%', max: 50000 },
            { id: 'home', name: 'Home Loan', rate: '7.2%', max: 1000000 },
            { id: 'auto', name: 'Auto Loan', rate: '8.5%', max: 80000 },
        ];
    },

    applyForLoan: async (data) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    success: true,
                    message: 'Loan application submitted for review.'
                });
            }, 1000);
        });
    },

    getMyLoans: async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { id: 123, type: 'Personal Loan', amount: 5000, status: 'Active', nextPayment: '2025-01-15' },
                ]);
            }, 600);
        });
    },

    getPendingLoans: async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { id: 101, customerName: 'John Doe', type: 'Home Loan', amount: 350000, date: '2025-12-19', status: 'Pending' },
                    { id: 102, customerName: 'Jane Smith', type: 'Auto Loan', amount: 25000, date: '2025-12-20', status: 'Pending' },
                    { id: 103, customerName: 'Alice Johnson', type: 'Personal Loan', amount: 10000, date: '2025-12-21', status: 'Pending' },
                ]);
            }, 800);
        });
    },

    updateLoanStatus: async (id, status) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    success: true,
                    message: `Loan application #${id} has been ${status.toLowerCase()}.`
                });
            }, 1000);
        });
    }
};
