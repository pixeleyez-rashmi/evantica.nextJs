// components/SalWrapper.tsx

"use client"; // Mark as Client Component if using App Router

import React, { useEffect } from 'react';
import sal from 'sal.js';
// Import the CSS file (adjust path if necessary based on your project structure)
import 'sal.js/dist/sal.css'; 

const SalWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    sal();
    
    // Optional: Re-initialize or refresh on updates if needed, e.g., for dynamic content
    return () => {
      // Clean up sal instance if it has a destroy method, though sal.js doesn't explicitly mention one.
      // You can manually stop observation if necessary for complex use cases.
    };
  }, []);

  return <>{children}</>;
};

export default SalWrapper;
