import { useState, useEffect } from "react";
import CheckOutForm from "../components/UI/checkoutForm/CheckOutForm";
import { supabase } from "../supabaseClient";
import { Navigate } from "react-router-dom";

import "../styles/checkout.css";

const Checkout = () => {

  const [loading, setLoading] = useState(true)
  const [session,setSession] = useState(null)

  useEffect(async () => {
    window.scrollTo(0, 0);
    const isLoaded = async () => {
      setLoading(true);
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session);
        setLoading(false);
      }, [])
      supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session);
        setLoading(false)
      })
    }
    isLoaded();
  }, [])

  if (loading) {
    return (
      <div>بارگذاری</div>
    )
  }
  else {
    return (
      <>
        {session ? (
          <CheckOutForm/>
        ):(
          <Navigate to={'/register'} replace={true}/>
        )}
      </>
    )
  }
};

export default Checkout;
