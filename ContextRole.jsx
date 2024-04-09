// RoleContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import PropTypes from 'prop-types';

const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  const [payload, setPayload] = useState(null);
  const [role, setRole] = useState('');

  useEffect(() => {
    const tokenValue = Cookies.get("token");
    if (tokenValue) {
      const decoded = jwtDecode(tokenValue);
      if (decoded) {
        setPayload(decoded); // Lưu payload vào state
        const userRole = decoded.role;
        setRole(userRole);
      } else {
        console.error('Không thể giải mã token hoặc token không hợp lệ');
      }
    } else {
      console.error('Không có token');
    }
  }, []);

  return (
    <RoleContext.Provider value={{ role, payload }}>
      {children}
    </RoleContext.Provider>
  );
};

RoleProvider.propTypes = {
  // eslint-disable-next-line no-undef
  children: PropTypes.node.isRequired,
};

export const useRole = () => useContext(RoleContext);
