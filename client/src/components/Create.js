import React, {useState} from 'react'
import axios from 'axios'


const Create = () =>{
    const [titleState, setTitleState] = useState('')
    const [priceState, setPriceState] = useState(0)
    const [descState, setDescState] = useState('')
    
    const handleSubmit = event =>{
        event.preventDefault();
        const payload = {
            title: titleState,
            price: priceState,
            description: descState
        }
        axios.post("http://localhost:8000/api/products", payload)
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

    return(
        <div>
            <h1>Create a Product</h1>
            <form onSubmit={handleSubmit}>
                <p>
                    Title:
                    <input type="text" name="title" onChange={(e) =>setTitleState(e.target.value)} />
                </p>
                <p>
                    Price:
                    <input type="number" name="price" onChange={(e) => setPriceState(e.target.value)} />
                </p>
                <p>
                    Description:
                    <input type="text" name="description" onChange={(e) => setDescState(e.target.value)} />
                </p>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )

}
export default Create;