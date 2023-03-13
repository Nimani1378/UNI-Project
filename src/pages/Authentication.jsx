
import { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'
import Auth from '../components/Authentication/Auth'
import Account from '../components/Authentication/Account'
import CommonSection from '../components/UI/common-section/CommonSection'

export default function Authentication() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0);
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    }, [])

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
      <div>
        <CommonSection title='حساب کاربری'/>
        {!session ? <Auth /> : <Account key={session.user.id} session={session} />}
      </div>
  )
}