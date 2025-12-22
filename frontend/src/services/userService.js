// Simulating API calls for User Management

// In-memory store for demo purposes (resets on reload)
let customers = [
    { id: 1, name: 'Alice Johnson', email: 'alice@bank.com', status: 'Active', balance: 5400 },
    { id: 2, name: 'Bob Smith', email: 'bob@bank.com', status: 'Suspended', balance: 120 },
    { id: 3, name: 'Charlie Brown', email: 'charlie@bank.com', status: 'Active', balance: 14500 },
];

let employees = [
    { id: 101, name: 'John Doe', email: 'john.emp@bank.com', role: 'Manager' },
    { id: 102, name: 'Jane Doe', email: 'jane.emp@bank.com', role: 'Teller' },
];

export const userService = {
    getCustomers: async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([...customers]);
            }, 600);
        });
    },

    getEmployees: async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([...employees]);
            }, 600);
        });
    },

    addEmployee: async (employeeData) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const newEmployee = {
                    id: employees.length + 101,
                    ...employeeData
                };
                employees.push(newEmployee);
                resolve({ success: true, employee: newEmployee });
            }, 800);
        });
    },

    toggleStatus: async (id, currentStatus) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const customer = customers.find(c => c.id === id);
                if (customer) {
                    customer.status = currentStatus === 'Active' ? 'Suspended' : 'Active';
                    resolve({ success: true, newStatus: customer.status });
                } else {
                    resolve({ success: false });
                }
            }, 500);
        });
    }
};
