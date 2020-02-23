import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Update = ({id}) =>{
    const [titleState, setTitleState] = useState('')
    const [priceState, setPriceState] = useState(0)
    const [descState, setDescState] = useState('')

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/"+id)
            .then(res => {
                setTitleState(res.data.title)
                setPriceState(res.data.price)
                setDescState(res.data.description)
            })
            .catch(err => {
                console.log("ERR: ", err)
            })
    },[])

    const handleSubmit = event =>{
        event.preventDefault();
        const payload = {
            title: titleState,
            price: priceState,
            description: descState
        }
        axios.put(`http://localhost:8000/api/products/${id}/edit`, payload)
            .then(res => {
                console.log("RES: ", res)
            })
            .catch(err => {
                console.log("ERR: ", err)
            })
        setTitleState("")
        setPriceState(0)
        setDescState("")
    }

    return (
        <div>
        <h1>Edit a Product</h1>
        <form onSubmit={handleSubmit}>
            <p>
                Title:
                <input type="text" name="title" value={titleState} onChange={(e) =>setTitleState(e.target.value)} />
            </p>
            <p>
                Price:
                <input type="number" name="price" value={priceState} onChange={(e) => setPriceState(e.target.value)} />
            </p>
            <p>
                Description:
                <input type="text" name="description" value={descState} onChange={(e) => setDescState(e.target.value)} />
            </p>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
    )

}
export default Update;