// Simulating API calls

export const authService = {
    login: async (email, password) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Mock validation
                if (password === 'fail') {
                    reject({ message: 'Invalid credentials' });
                    return;
                }

                let role = 'customer';
                if (email.includes('admin')) role = 'admin';
                else if (email.includes('emp')) role = 'employee';

                // Mock success response
                resolve({
                    token: 'mock-jwt-token-' + Math.random().toString(36).substring(2),
                    user: {
                        id: 1,
                        name: email.split('@')[0].toUpperCase(),
                        email: email,
                        role: role
                    }
                });
            }, 800);
        });
    },

    register: async (userData) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    message: 'Registration successful',
                    success: true
                });
            }, 1000);
        });
    }
};
