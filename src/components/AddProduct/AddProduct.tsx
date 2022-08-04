import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';

const AddProduct: React.FC = () => {
    let history = useHistory()

    const [values, setValues] = useState({
        title:'',
        type:'',
        image:'',
        description:'',
        price: 0,
        comments:[]
    })
    const [type, setType] = useState('')

    const addProduct = async (newProduct: any) => {
        try{
            let res = await axios.post(`http://localhost:8002/products`, newProduct)
            return res
        } catch(err){
            console.log(err)
            return err
        }
    }

    const handleChange = (event: any)=>{
        setType(event.target.value)
    }

    const handleInp = (e: any) =>{
        let obj={
            ...values, 
            [e.target.name] : e.target.value
        }
        setValues(obj)
    }

    const handleSave = () => {
        addProduct(values)
        alert('Product Successfully Added')
        history.push('/')
    }

    return (
        <div className="add_products_inputs">
            <div className="add_inp">
                <label>Title</label>
                <input required className="add" onChange={handleInp} 
                value={values.title} name="title"  type="text" />
                <label>Type</label>
                <input required className="add" onChange={handleInp} 
                value={values.type} name="type" type="text" />
                <label>Price</label>
                <input required className="add" onChange={handleInp} 
                value={values.price} name="price" type="number" />
                <label>Description</label>
                <input required className="add" onChange={handleInp} 
                value={values.description} name="description" type="text" />
                <label>Image</label>
                <input required className="add" onChange={handleInp} 
                value={values.image} name="image" type="text" />

                <button id="add_btn" onClick={handleSave}>Add Product</button>
            </div>
        </div>
    );
};

export default AddProduct;