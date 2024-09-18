// // src/components/ProtectedRoute.js
// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const ProtectedRoute = ({ element }) => {
//   const { isAuthenticated } = useSelector((state) => state.user); // Your auth state
  
//   if (!isAuthenticated) {
//     return <Navigate to="/login" />;
//   }

//   return element;
// };

// export default ProtectedRoute;


import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, requiredRole }) => {
  const { isAuthenticated, role } = useSelector((state) => state.user);

  console.log('Authenticated:', isAuthenticated);
  console.log('User Role:', role);
  console.log('Required Roles:', requiredRole);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && !requiredRole.includes(role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return element;
};

export default ProtectedRoute;

