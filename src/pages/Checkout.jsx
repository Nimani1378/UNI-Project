import { useState, useEffect } from "react";
import CheckOutForm from "../components/UI/checkoutForm/CheckOutForm";
import { supabase } from "../supabaseClient";
import { Navigate } from "react-router-dom";

import "../styles/checkout.css";

const Checkout = () => {
  
  const [loading, setLoading] = useState(true)


  
  

  let session1 = null;

  useEffect(async () => {
    window.scrollTo(0, 0);
    const isLoaded = async()=>{
      setLoading(true);
      supabase.auth.getSession().then(({ data: { session } }) => {
        session1 = session;
        setLoading(false)
      }, [])
      supabase.auth.onAuthStateChange((_event, session) => {
        session1 = session;
        setLoading(false)
      })
      isLoaded();
    }
  }, [])

  if(loading){
    return (
      <div>بارگذاری</div>
    )
  }
  else{
    return(
      <>
      looaded
      {console.log(session1)}
      </>
    )
  }
};

export default Checkout;
