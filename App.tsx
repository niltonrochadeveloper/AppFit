import AuthHandler from './src/navigators/auth';

export default function App() {

  const isAppReady = true

  return (
    <>
      {isAppReady && <AuthHandler />}
    </>
  )
}


