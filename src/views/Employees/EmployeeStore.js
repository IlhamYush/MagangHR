// employeeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const employeeSlice = createSlice({
  name: 'employee',
  initialState: {
    joinDate: '',
    dumpnik: '', // Tambahkan dumpnik ke initial state
  },
  reducers: {
    setJoinDate: (state, action) => {
      state.joinDate = action.payload;
    },
    setDumpNik: (state, action) => {
      // Tambahkan reducer setDumpNik
      state.dumpnik = action.payload;
    },
  },
});

export const { setJoinDate, setDumpNik } = employeeSlice.actions; // Export setDumpNik
export default employeeSlice.reducer;
