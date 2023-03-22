import { useState, useEffect } from "react";
import CheckOutForm from "../components/UI/checkoutForm/CheckOutForm";
import { supabase } from "../supabaseClient";
import { Navigate } from "react-router-dom";

import "../styles/checkout.css";

const Checkout = () => {

  const [loading, setLoading] = useState(true)
  const [session,setSession] = useState(null)
  const [userInfo,setUserInfo] = useState({
    name:'',
    LastName:'',
    Phone:'',
    Address:''
  })

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

  const getProfile = async (ss) => {
    try {
      setLoading(true)
      const { user } = ss

      let { data, error, status } = await supabase
        .from('users')
        .select(`name, LastName, Phone, Address`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUserInfo({
          name: data.name,
          lastname: data.LastName,
          phone: data.Phone,
          address: data.Address
        })
      }
    } catch (error) {
      alert(error.massage)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div>بارگذاری</div>
    )
  }
  else {
    return (
      <>
        {session ? (
          <CheckOutForm session={session} />
        ):(
          <Navigate to={'/register'} replace={true}/>
        )}
      </>
    )
  }
};

export default Checkout;
