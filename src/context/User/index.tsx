import { createContext, useContext, useState } from 'react';

// const [ user, setUser ] = useState<User>()

interface User {
  name: string;
  email: string;
  isAppReady: boolean;
}

const UserContext = createContext<User | null>(null);

export const useUserContext = () => useContext(UserContext);

export default UserContext;
