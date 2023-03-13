import { useState, useEffect } from 'react'
import { supabase } from '../../supabaseClient'
import '../../styles/Account.css'
import Form from '../UserFoods/Form'
const Account = ({ session }) => {
  const [loading, setLoading] = useState(true)
  const [changed, setChanged] = useState(false)
  const [userInfo, setUserInfo] = useState(null)
  const [foods, setFoods] = useState(null)

  const getUserFoods = async () => {
    const { data, error } = await supabase
      .from('foods')
      .select()
      .eq('user_id', session.user.id);
    if (error) {
      throw error
    }
    if (data) {
      setFoods(data)
    }
  }

  useEffect(() => {

    const getProfile = async () => {
      try {
        setLoading(true)
        const { user } = session

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
          try {
            await getUserFoods();
          } catch (error) {
            console.log(error.message)
          }
        }
      } catch (error) {
        console.log(error.message, 'from hre')
      } finally {
        setLoading(false)
      }
    }

    console.log(supabase);
    getProfile()
  }, [session])

  const updateProfile = async (e) => {
    e.preventDefault()
    if (!changed) { alert('مشخصات تغییری نداشته است') }
    else {
      try {
        setLoading(true)
        const { user } = session

        const updates = {
          id: user.id,
          name: userInfo.name,
          LastName: userInfo.lastname,
          Phone: userInfo.phone,
          Address: userInfo.address,
        }

        let { error } = await supabase.from('users').upsert(updates)

        if (error) {
          throw error
        }
      } catch (error) {
        alert(error.message)
      } finally {
        setLoading(false)
      }
    }
  }

  return (
    <div aria-live="polite">
      <div className='container'>


        {loading ? (
          'در حال بارگذاری...'
        ) : (

          <>
            <div className='avatar-container'>
              <img
                src={`https://avatars.dicebear.com/api/bottts/${session.user.id}.svg`}
                alt="avatar"
                width='170'
                height='170'
              />
            </div>
            <form onSubmit={updateProfile} className="form-widget">
              <div className='input_div'>
                <span>ایمیل</span>
                <span>{session.user.email}</span>
              </div>
              <div className='input_div'>
                <label htmlFor="username" className='nameLabel'>نام</label>
                <input
                  className='nameInputField'
                  id="username"
                  type="text"
                  value={userInfo.name || ''}
                  onChange={(e) => { setUserInfo({ ...userInfo, name: e.target.value }); setChanged(true); }}
                />
              </div>
              <div className='input_div'>
                <label htmlFor="FullName" className='nameLabel'>نام خانوادگی</label>
                <input
                  className='nameInputField'
                  id="FullName"
                  type="text"
                  value={userInfo.lastname || ''}
                  onChange={(e) => { setUserInfo({ ...userInfo, lastname: e.target.value }); setChanged(true) }}
                />
              </div>
              <div className='input_div'>
                <label htmlFor="phonenumber" className='nameLabel'>شماره تلفن</label>
                <input
                  className='nameInputField'
                  id="phonenumber"
                  type="number"
                  value={userInfo.phone || ''}
                  onChange={(e) => { setUserInfo({ ...userInfo, phone: e.target.value }); setChanged(true); }}
                />
              </div>
              <div className='input_div'>
                <label htmlFor="address" className='nameLabel'>آدرس</label>
                <input
                  className='nameInputField'
                  id="address"
                  type="text"
                  value={userInfo.address || ''}
                  onChange={(e) => { setUserInfo({ ...userInfo, address: e.target.value }); setChanged(true); }}
                />
              </div>
              <div>
                <button type='submit' className="update_button" disabled={loading}>
                  بروزرسانی مشخصات
                </button>
              </div>
            </form>
            {foods && (
              <div style={{ width: '100%' }}>
                <Form foods={foods} session={session} getUserFoods={getUserFoods} />
              </div>
            )}
          </>
        )}
        <button type="button" className="btn btn-secondary" onClick={() => supabase.auth.signOut()}>
          خروج
        </button>

      </div>
    </div>
  )
}

export default Account