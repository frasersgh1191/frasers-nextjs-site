import Head from 'next/head'
import { signIn, signOut, useSession } from 'next-auth/client'
import Layout from '../components/layout'

export default function Account() {
  const [session, loading] = useSession()
  console.log(session)
  return (
    <Layout>
      <Head>
        <title>Account-{session && `${session.user.name}`}</title>
      </Head>

      <>
        {!session && (
          <div>
            Not signed in
            <br />
            <br />
            <button onClick={() => signIn()}>Sign in</button>
            <br />
            <br />
          </div>
        )}
        {session && (
          <div>
            Hello {session.user.name} user of email address {session.user.email}
            <br />
            <br />
            <button onClick={() => signOut()}>Sign out</button>
            <br />
            <br />
          </div>
        )}
      </>

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
