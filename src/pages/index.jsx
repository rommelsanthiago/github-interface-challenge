import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>USERS GITHUB</title>
        <meta name="description" content="Github front-and-interface challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/github.ico" />
      </Head>
      <main>
        <h1>Users Github</h1>
      </main>
    </>
  )
}
