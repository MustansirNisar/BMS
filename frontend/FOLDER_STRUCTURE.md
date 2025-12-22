# Banking Management System - Folder Structure Guide

## `src/` - Source Code Directory

### `src/assets/`
Resources such as global CSS styles and images/SVGs used throughout the application.
- `index.css`: Global styles including CSS variables for the color palette/theme.

### `src/components/`
Reusable UI components that are not specific to a single page.
- `PrivateRoute.jsx`: A wrapper component that checks authentication and roles before rendering protected routes.

### `src/layout/`
Layout components that determine the overall page structure.
- `MainLayout.jsx`: The shell of the authenticated application, containing the Sidebar and Header.
- `MainLayout.module.css`: Styles specific to the layout.

### `src/pages/`
Route-specific components (Views).
- `auth/`: Login and Register pages.
- `customer/`: Pages specific to Customer role (Transfer, Loans, Cards, History).
- `employee/`: Pages specific to Employee role (Customer Management).
- `admin/`: Pages specific to Admin role (Employee Management).
- `Home.jsx`: The dashboard landing page.

### `src/services/`
Mock API services that simulate backend communication.
- `authService.js`: Handles login/register simulation.
- `transactionService.js`: Mock data for history and transfers.
- `loanService.js`: Mock data for loan types and applications.
- `cardService.js`: Mock data for credit/gift cards.
- `userService.js`: Mock data for managing customers/employees.

### `src/store/`
Redux state management.
- `index.js`: Store configuration.
- `authSlice.js`: Redux slice for managing user session and tokens.

### `src/utils/`
Utility functions and helpers (currently empty, ready for future expansion).

### Root Files
- `App.jsx`: The main application definition and Router configuration.
- `main.jsx`: The entry point that mounts the React app and provides the Redux store.
