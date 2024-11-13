import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from 'views/Employees/EmployeeStore.js'; // Adjust the path as needed

const store = configureStore({
  reducer: {
    employee: employeeReducer, // Add other reducers if needed
  },
});

export default store;
