import Head from 'next/head'
import Layout from '../components/layout'
import Double from '../components/double.tsx'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function About() {
  const [session, loading] = useSession()
console.log(session)
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
          {session && `Welcome home ${session.user.name} `}

      {loading && 'loading...'}
      <>
      {!session && <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </>
      }
      {
        session && <>
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      }
      </>
      <section className="menu-container">
        <div>Hello this is the about page</div>
      </section>
      <style jsx>{`
        .menu-container {
          width: 100vw;
          max-width: 1200px;
          place-self: center;
        }
      `}</style>
    </Layout>
  )
}