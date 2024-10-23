// import axios from 'axios';
// import API_BASE_URL from './apiConfig';

// const api = axios.create({
//     baseURL: API_BASE_URL
// });

// export const fetchData = async () => {
//     try {
//         const response = await api.post('/endpoint');
//         return response.data;
//     }
//     catch (error) {
//         console.error('Error Fetching Data', error);
//     }
// };

import axios from 'axios';
import API_BASE_URL from './apiConfig';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
});

export default api; // Hanya export instance axios
