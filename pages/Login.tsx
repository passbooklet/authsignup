import { useState } from "react"
import { auth, signInWithEmailAndPassword } from "../config/database"
import { useRouter } from "next/router";
import { async } from "@firebase/util";
import { Box, Button, Center, Stack,Flex } from "@chakra-ui/react"
import styles from '../styles/Login.module.css'





const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter();


  const onSubmitHandler = async () => {

      try {
          await signInWithEmailAndPassword(auth, email, password)
          router.push('/')
      } catch (e) {
          console.log('====================================');
          console.log(e);
          console.log('====================================');
      }
  }
  const signpage = async () => {
      router.push('/Signup')
  }

  return (
      <div
      >

          <Center
              h="100vh"
              bgColor="gray.900">
              <Stack
                  align="center"
                  bgColor="whiteAlpha.100"
                  rounded="3xl"
                  spacing={2}
                  p={10}
              >

                  <Flex
                      bgColor="whiteAlpha.800" boxShadow="md" color="gray.900" w="fit-content" borderRadius="lg" p={5} m={1}>
                      <h1>Login</h1>
                  </Flex>
                  <Flex
                      w="fit-content" borderRadius="lg" p={1} m={1}>
                      <div className={styles.inputgroup}>
                          <label className={styles.label}>Email address</label>
                          <input
                              onChange={(e) => setEmail(e.target.value)}
                              type="email"
                              name="Email"
                              className={styles.input}
                              placeholder="Enter your email" />
                          <div>
                          </div>
                      </div>
                  </Flex>
                  <Flex
                      w="fit-content" borderRadius="lg" p={1} m={1}>

                      <div className={styles.inputgroup}>
                          <label className={styles.label}>Password</label>
                          <input
                              onChange={(e) => setPassword(e.target.value)}
                              type="password"
                              name="password"
                              className={styles.input}
                              placeholder="Enter your Password" />
                          <div>
                          </div>
                      </div>
                      
                  </Flex>


                  <br />
                  <Button boxShadow="md" onClick={onSubmitHandler}  >Login</Button>
                  <Button boxShadow="md" onClick={signpage} >Signup with us</Button>


              </Stack>

          </Center>
         


      </div>
  )
}

export default Login