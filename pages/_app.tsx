import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../config/database"
import Signup from './Signup';
import Login from './Login';

export default function App({ Component, pageProps }: AppProps) {
  const [user, loading, error] = useAuthState(auth);
  if(user){
    return (
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    )

    }
    else{
      return (
        <ChakraProvider>
          <Signup/>
          <Login/>
        </ChakraProvider>
      )
    }}