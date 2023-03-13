import { useState } from 'react'
import { supabase } from '../../supabaseClient'

export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      const { error } = await supabase.auth.signInWithOtp({ email })
      if (error) throw error
      alert('ایمیل برای شما ارسال شد')
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{minHeight:'300px'}}>
      <div className="p-4">
        <h1 style={{fontSize:'2rem'}}>صفحه ورود</h1>
        <p style={{fontSize:'1rem'}}>نشانی ایمیل خود را در کادر زیر وارد کنید</p>
        {loading ? (
          'در حال ارسال ایمیل...'
        ) : (
          <form onSubmit={handleLogin}>
            <input
            required
              id="email"
              className="form-control mb-2"
              type="email"
              placeholder="نشانی ایمیل"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p style={{fontSize:'0.8rem'}}>* لینک ورود به حساب کاربری به ایمیل شما ارسال خواهد شد</p>
            <button type='submit' className="btn btn-danger btn-sm">
              ارسال لینک ورود
            </button>
            
          </form>
        )}
      </div>
    </div>
  )
}