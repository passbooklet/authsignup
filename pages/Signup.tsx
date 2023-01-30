import { ChangeEvent, useState } from "react"
import { auth, createUserWithEmailAndPassword,  } from "../config/database"
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../config/database"
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage"
import styles from '../styles/Login.module.css'
import { Box, Button, Center, Stack, Flex } from "@chakra-ui/react"
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'




import { useRouter } from "next/router";
import { format } from "path";
import { async } from "@firebase/util";

const Signup = () => {
  const [username, setusername] = useState<string>("")

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const router = useRouter();
  const [error, seterror] = useState("")
  const [attachmentURL, setAttachmentURL] = useState('')



  const onSubmitHandler = async () => {
    if (!username || !email || !password || !savefile) {
      seterror("please enter all the fields");
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const newDoc = {
        username: username,
        createdAt: new Date(),
        email: email,
        Url: attachmentURL,
      }
      await addDoc(collection(db, "users"), newDoc);

    } catch (e) {
      console.log("------------------------------------");
      console.log(e);
      console.log("------------------------------------");
    }
    router.push('/')
  }
  const savefile = async (e: ChangeEvent<HTMLInputElement>) => {
    if (null != e.target.files) {
      const storageRef = ref(storage, `/usersImages/${email}`);
      const result = await uploadBytes(storageRef, e.target.files[0])
      const downloadURL = await getDownloadURL(result.ref)
      setAttachmentURL(downloadURL)
    } else {
      alert("the selected picture is null")
    }
  }
 const loginpage =()=>{
  router.push('/Login')
 }


  return (
    <div>
      <Center
        h="100vh"
        bgColor="gray.900">
        <Stack
          align="center"
          bgColor="whiteAlpha.100"
          rounded="3xl"
          spacing={2}
          p={20}
        >

          <Flex
            bgColor="whiteAlpha.800" boxShadow="md" color="gray.900" w="fit-content" borderRadius="lg" p={5} m={1}>
            <h1>Sign up</h1>
          </Flex>
          <Flex
            w="fit-content" borderRadius="lg" p={1} m={1}>
            <div className={styles.inputgroup}>
              <label className={styles.label}>User Name</label>
              <input
                onChange={(e) => setusername(e.target.value)}
                 type="text"
                  placeholder="Enter your name" value={username}
                className={styles.input}
               />
               
              <div>
              </div>
            </div>
          </Flex>
          <Flex
            w="fit-content" borderRadius="lg" p={1} m={1}>
            <div className={styles.inputgroup}>
              <label className={styles.label}>Email address</label>
              <input
                onChange={(e) => setemail(e.target.value)}
                value={email}
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
                onChange={(e) => setpassword(e.target.value)} 
                value={password}
                type="password"
                name="password"
                className={styles.input}
                placeholder="Enter your Password" />
              <div>
              </div>
            </div>
          </Flex>
          <Flex
            w="fit-content" borderRadius="lg" p={1} m={1}>
          <input 
          style={{display:"none"}} 
          id="file" type="file" 
          onChange={savefile} 
          placeholder=".." />
<label htmlFor="file"><AvatarGroup  spacing='1rem'>
  <Avatar bg='teal.500' />
 
</AvatarGroup>
</label>
</Flex>
          

          <br />
          <Button boxShadow="md" onClick={onSubmitHandler} >Sign up</Button>
          <Button boxShadow="md" onClick={loginpage} >Already logged In </Button>


        </Stack>

      </Center>
    </div>
  )
}

export default Signup