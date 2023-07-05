import AuthHandler from './src/navigators/auth';
import UserContext from './src/context/User';

export default function App() {

  const user = { name: 'John Doe', email: 'johndoe@example.com', isAppReady: true };

  const isAppReady = user.isAppReady

  return (
    <UserContext.Provider value={user}>
      {isAppReady && <AuthHandler />}
    </UserContext.Provider>
  )
}


