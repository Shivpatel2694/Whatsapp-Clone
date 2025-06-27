import { createContext, useState, useRef, useEffect } from "react";

import {io} from 'socket.io-client';

export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState();
  const [person, setPerson] = useState({});
  const [activeUsers, setActiveUsers] = useState([]);
  const [newMessageFlag, setnewMessageFlag] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const socket = useRef();

  // Load account data from localStorage on component mount
  useEffect(() => {
    const savedAccount = localStorage.getItem('whatsapp-account');
    if (savedAccount) {
      try {
        const parsedAccount = JSON.parse(savedAccount);
        setAccount(parsedAccount);
      } catch (error) {
        console.error('Error parsing saved account:', error);
        localStorage.removeItem('whatsapp-account');
      }
    }
    setIsLoading(false);
  }, []);

  useEffect(()=>{
    socket.current = io('ws://localhost:9000');
    
    socket.current.on('connect', () => {
      console.log('🔗 Socket connected:', socket.current.id);
    });

    socket.current.on('disconnect', () => {
      console.log('🔌 Socket disconnected');
    });

    return () => {
      if (socket.current) {
        socket.current.disconnect();
      }
    };
  }, [])

  // Register user with socket when account is available
  useEffect(() => {
    if (account && socket.current) {
      console.log('👤 Registering user with socket:', account.name);
      socket.current.emit('addUsers', account);
      
      socket.current.on('getUsers', users => {
        console.log('👥 Active users updated:', users.length);
        setActiveUsers(users);
      });
    }
  }, [account]);

  // Enhanced setAccount function to save to localStorage
  const setAccountWithPersistence = (accountData) => {
    setAccount(accountData);
    if (accountData) {
      localStorage.setItem('whatsapp-account', JSON.stringify(accountData));
    } else {
      localStorage.removeItem('whatsapp-account');
    }
  };

  // Logout function to clear all data
  const logout = () => {
    setAccount(null);
    setPerson({});
    setActiveUsers([]);
    localStorage.removeItem('whatsapp-account');
    if (socket.current) {
      socket.current.disconnect();
      socket.current = io('ws://localhost:9000');
    }
  };

  return (
    <AccountContext.Provider
      value={{
        account,
        setAccount: setAccountWithPersistence,
        logout,
        person,
        setPerson,
        socket,
        activeUsers,
        setActiveUsers,
        newMessageFlag,
        setnewMessageFlag,
        isLoading
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
