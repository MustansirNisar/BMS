# Banking Management System - Project Flow & User Guide

## 1. Authentication Flow
- **Entry Point**: Everything checks `auth` state in Redux.
- **Login**: `src/pages/auth/Login.jsx` calls `authService.login()`.
    - **Logic**: Simulates credential check. 
    - **Role Assignment**: Checks email pattern:
        - `admin@...` -> **Admin**
        - `emp@...` -> **Employee**
        - Others -> **Customer**
- **Redirect**: Upon success, redirects to `/`.

## 2. Protected Routes (RBAC)
- **Mechanism**: `src/components/PrivateRoute.jsx` intercepts routes.
- **Check**: If not logged in -> Redirect to `/login`.
- **Navigation**: `src/layout/MainLayout.jsx` dynamically renders sidebar links based on the user's role.

## 3. Customer Portal Flow
- **Dashboard**: Lands on `Home.jsx`. Shows basic account summary.
- **Transfers**: User goes to `Transfer.jsx`.
    - Fills recipient/amount -> Calls `transactionService.transferFunds()` -> Updates UI.
- **History**: `Transactions.jsx` fetches mock history from `transactionService`.
- **Loans**: `Loans.jsx` lists available loan types.
    - User clicks Apply -> enters amount -> submits.
    - Shows "My Active Loans" via `loanService`.
- **Cards**: `Cards.jsx` displays Credit and Gift cards fetched from `cardService`.

## 4. Employee Portal Flow
- **Customer Management**: `CustomerManagement.jsx` lists all users.
    - **Action**: Can toggle "Suspend/Active" status. This mocks an API call to `userService`.

## 5. Admin Portal Flow
- **Employee Management**: `EmployeeManagement.jsx` lists internal staff.
    - **Action**: View details, Add/Remove (mock buttons).

## 6. Technical Flow
1. **React Router** handles URL changes.
2. **Redux** stores user object `{ name, email, role, token }`.
3. **Services** return Promises with `setTimeout` to mimic network latency.
