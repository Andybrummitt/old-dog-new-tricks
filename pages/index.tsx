import type { NextPage } from 'next'
import Head from 'next/head'
import MobileNavbar from '../components/Mobile-Navbar'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Old Dog New Tricks | Blog</title>
        <meta name="description" content="My goal: Try 26 new activities in 2023. Follow an old dog as I try a new pastime for each letter of the alphabet." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MobileNavbar />
      <main className={styles.main}>
        <h1>Old Dog, New Tricks!</h1>
      </main>
    </div>
  )
}

export default Home
