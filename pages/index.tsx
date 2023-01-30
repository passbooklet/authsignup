import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";
import { auth } from "../config/database"
import { Box, Button, Center, Stack, Flex } from "@chakra-ui/react"
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'


export default function Home() {
  const router = useRouter();

const tosignout =()=>{
  signOut(auth).then(() => {
  }).catch((error) => {
    console.log(error);
    
  });
}


 


  return (
    <>
      
       <div>
      <Center
        h="100vh"
        bgColor="gray.900">
        <Stack
          align="center"
          bgColor="whiteAlpha.100"
          rounded="3xl"
          spacing={3}
          p={20}
        >

          <Flex
            bgColor="whiteAlpha.800" boxShadow="md" color="gray.900" w="fit-content" borderRadius="lg" p={3} m={1}>
            <h1>Welcome to my page</h1>
          </Flex>
         <br/>
         <br/>
         <br/>
         <br/>

         
          <Button boxShadow="md" onClick={tosignout} >signOut</Button>



        </Stack>

      </Center>
    </div>

    </>
  )
}
