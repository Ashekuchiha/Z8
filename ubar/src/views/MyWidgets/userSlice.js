
// // token came from api
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export const login = createAsyncThunk('auth/login', async (credentials) => {
//   // Simulate a delay for the login process
//   await new Promise((resolve) => setTimeout(resolve, 1000));

//   // Simulate a successful login if username and password are correct
//   if (credentials.username === 'admin' && credentials.password === 'admin') {
//     return { username: 'admin', token: 'fake-token' };
//   } else {
//     throw new Error('Invalid credentials');
//   }
// });

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     isAuthenticated: false,
//     user: null,
//     token: null,
//   },
//   reducers: {
//     logout: (state) => {
//       state.isAuthenticated = false;
//       state.user = null;
//       state.token = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(login.fulfilled, (state, action) => {
//       state.isAuthenticated = true;
//       state.user = action.payload.username;
//       state.token = action.payload.token;
//     });
//     builder.addCase(login.rejected, (state) => {
//       state.isAuthenticated = false;
//     });
//   },
// });

// export const { logout } = authSlice.actions;
// export default authSlice.reducer;


// // src/features/auth/authSlice.js
// //my username password will be token and save on localdata
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = () => {
//   const savedState = localStorage.getItem('authState');
//   if (savedState) {
//     return JSON.parse(savedState);
//   }
//   return {
//     isAuthenticated: false,
//     user: null,
//     token: null,
//   };
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: initialState(),
//   reducers: {
//     login: (state, action) => {
//       state.isAuthenticated = true;
//       state.user = action.payload.username;
//       state.token = action.payload.token;
//       localStorage.setItem('authState', JSON.stringify(state));
//     },
//     logout: (state) => {
//       state.isAuthenticated = false;
//       state.user = null;
//       state.token = null;
//       localStorage.removeItem('authState');
//     },
//   },
// });

// export const { login, logout } = authSlice.actions;
// export default authSlice.reducer;



// src/views/MyWidgets/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Mock JSON data
const users = [
  {
    username: "ashik",
    password: "12345678",
    role: "admin",
    token: "adminLoginToken"
  },
  {
    username: "alif",
    password: "12345678",
    role: "city admin",
    token: "cityAdminLoginToken"
  }
];

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  role: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload;
      
      // Simulate authentication using mock data
      const foundUser = users.find(user => user.username === username && user.password === password);

      if (foundUser) {
        // Store user data in the state and simulate authentication token
        state.isAuthenticated = true;
        state.user = foundUser.username;
        state.token = foundUser.token;
        state.role = foundUser.role;

        // Save user info in localStorage for persistence
        localStorage.setItem('authToken', foundUser.token);
        localStorage.setItem('authUser', JSON.stringify(foundUser));
      } else {
        throw new Error('Invalid username or password');
        console.log("login problem")
      }
    },
    logout: (state) => {
      // Reset the state and clear localStorage
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.role = null;
      localStorage.removeItem('authToken');
      localStorage.removeItem('authUser');
    },
    checkAuth: (state) => {
      // Check localStorage for persistent login
      const token = localStorage.getItem('authToken');
      const user = JSON.parse(localStorage.getItem('authUser'));
      if (token && user) {
        state.isAuthenticated = true;
        state.user = user.username;
        state.token = token;
        state.role = user.role;
      } else {
        state.isAuthenticated = false;
      }
    },
  },
});

export const { login, logout, checkAuth } = authSlice.actions;

export default authSlice.reducer;
