import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Client2</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" type='image/jpg' href="/public/logo.jpg" />
      </Head>
    </div>
  )
}
