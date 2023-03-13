import { useState } from "react"
import '../../styles/userAddFoodForm.css'
import { supabase } from '../../supabaseClient'

const Form = ({ foods, session, getUserFoods }) => {
    const [update, setUpdate] = useState(false)
    const [formInputs, setFormInputs] = useState({
        id: null,
        name: '',
        price: '',
        des: '',
        count: '',
        category: 'پیتزا'
    })
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (update) {
            console.log({ ...formInputs, user_id: session.user.id })
            try {
                let { error } = await supabase.from('foods').upsert({ ...formInputs, user_id: session.user.id })
                if (error) {
                    throw error
                } else {
                    setFormInputs({
                        id: null,
                        name: '',
                        price: '',
                        des: '',
                        count: '',
                        category: 'پیتزا'
                    });
                    setUpdate(false);
                    alert('به روزرسانی موفقیت آمیز بود')
                }
            } catch (error) {
                alert(error.message)
            }
        } else {
            try {
                delete formInputs.id;
                let { error } = await supabase.from('foods').insert({ ...formInputs, user_id: session.user.id })
                if (error) {
                    throw error
                } else {
                    setFormInputs({
                        id: null,
                        name: '',
                        price: '',
                        des: '',
                        count: '',
                        category: 'پیتزا'
                    });
                    alert('محصول با موفقیت اضافه شد');
                    try {
                        await getUserFoods();
                    } catch (error) {
                        console.log(error.message)
                    }
                }
            } catch (error) {
                alert(error.message)
            }
        }
    }
    return (
        <div>
            <div className="my-4">
                <h3 className="form_headers">غذا های ثبت شده</h3>
                <div className="list">
                    {foods ? (
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th className="p-2">
                                        نام
                                    </th>
                                    <th className="p-2">
                                        تعداد
                                    </th>
                                    <th className="p-2">
                                        قیمت
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {foods.map((item) => (
                                    <tr onClick={() => {
                                        setUpdate(true); setFormInputs({
                                            id: item.id,
                                            name: item.name,
                                            price: item.price,
                                            des: item.des,
                                            count: item.count,
                                            category: item.category
                                        })
                                    }} key={item.id}>
                                        <td className="p-2">{item.name}</td>
                                        <td className="p-2">{item.count}x</td>
                                        <td className="p-2">{item.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <span>شما محصولی ندارید</span>
                    )}
                </div>
            </div>
            <div>
                <h3 className="form_headers">اضافه کردن غذا</h3>
                <form onSubmit={handleSubmit}>
                    <div className="d-flex flex-wrap py-2">
                        <div class="mb-1 w-50 px-1">
                            <input required value={formInputs.name} onChange={(e) => { setFormInputs({ ...formInputs, name: e.target.value }) }} type="text" class="form-control form-control-sm" id="name" placeholder="نام" />
                        </div>
                        <div class="mb-1 w-50 px-1">
                            <input required value={formInputs.price} onChange={(e) => { setFormInputs({ ...formInputs, price: e.target.value }) }} type="number" class="form-control form-control-sm" id="price" placeholder="قیمت" />
                        </div>
                        <div class="mb-1 w-100 px-1">
                            <textarea value={formInputs.des} onChange={(e) => { setFormInputs({ ...formInputs, des: e.target.value }) }} class="form-control form-control-sm" id="dec" rows="3" placeholder="توضیحات"></textarea>
                        </div>
                        <div class="mb-2 w-50 px-1">

                            <input value={formInputs.count} onChange={(e) => { setFormInputs({ ...formInputs, count: e.target.value }) }} type="number" class="form-control form-control-sm" id="count" placeholder="تعداد" />
                        </div>
                        <div class="mb-2 w-50 px-1">
                            <select defaultValue={formInputs.category} onChange={(e) => { setFormInputs({ ...formInputs, category: e.target.value }) }} class="form-select form-select-sm" id="category" aria-label="Default select example">
                                <option value="پیتزا">پیتزا</option>
                                <option value="همبرگر">همبرگر</option>
                                <option value="غذای_سنتی">غذای سنتی</option>
                            </select>
                        </div>
                        <div class="mb-1 w-50 px-1">
                            <button type="submit" class="btn btn-success btn-sm">{update ? 'به روزرسانی' : 'ثبت غذا'}</button>
                        </div>
                        {update && (
                            <>
                                <div class="mb-1 w-25 px-1">
                                    <button type="button" onClick={() => {
                                        setUpdate(false); setFormInputs({
                                            id: null,
                                            name: '',
                                            price: '',
                                            des: '',
                                            count: '',
                                            category: 'پیتزا'
                                        })
                                    }} class="btn btn-dark btn-sm w-100">لغو</button>
                                </div>
                                <div class="mb-1 w-25 px-1">
                                    <button type="button" onClick={async () => {
                                        try {
                                            const { error } = await supabase
                                                .from('foods')
                                                .delete()
                                                .eq('id', formInputs.id);
                                            if (error) {
                                                throw error
                                            }
                                            else {
                                                setUpdate(false);
                                                setFormInputs({
                                                    id: null,
                                                    name: '',
                                                    price: '',
                                                    des: '',
                                                    count: '',
                                                    category: 'پیتزا'
                                                });
                                                await getUserFoods();
                                                alert('حذف محصول انجام شد')
                                            }
                                        } catch (error) {
                                            alert(error.massege)
                                        }

                                    }} class="btn btn-danger btn-sm w-100">حذف</button>
                                </div>
                            </>
                        )}
                    </div>
                </form>
            </div >
        </div >
    )
}
export default Form;