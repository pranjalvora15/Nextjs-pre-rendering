// import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "@next/font/google";
// import styles from "@/styles/Home.module.css";

// const inter = Inter({ subsets: ["latin"] });

/*
// routing
import Link from 'next/link'
import {useRouter} from 'next/router'

export default function Home() {
  const router = useRouter()

  const handleSubmit = ()=>{
    console.log('Placing your order');
    router.push('/product')
  }

  return (
    <>
      <div>
        <h1>Home Page</h1>
        <Link href='/blogs'>
        Blog
        </Link>
        <Link href='/product'>
        Product
        </Link>
        <button onClick={handleSubmit}>Place Order</button>
      </div>
    </>
  );
}
*/

import Link from 'next/link'
export default function Home(){
  return (
    <>
    
    <h1>Pre-render and data fetching</h1>
    <Link href='/users'>Users</Link>
    <Link href='/posts'>Posts</Link>
    </>
  )
}