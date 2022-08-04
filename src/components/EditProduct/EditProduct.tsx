import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { editProducts, getProducts, saveEdited } from '../../store/action-creator/Coffee';
import '../../Styles/styles.css'

const EditProduct:React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { edit } = useTypedSelector( state => state.product)
    
    const history = useHistory()
    const dispatch = useDispatch()
    const [values, setValues] = useState(edit)    
    
    useEffect(()=>{
        dispatch(editProducts(id))
    },[id])
    
    useEffect(() => {
        setValues(edit)                                                                                                                                                     
    }, [edit])                                                                                                                                                  
    
    
    
    useEffect(()=>{
        dispatch(getProducts(history))
    }, [id])
    

    const handleEditInp = (e:any)=>{
        console.log(values);
        let obj = {
            ...values,
            [e.target.name]:e.target.value,
            id:id
        }
        setValues(obj)
    }

    const handleSave = () => {
        saveEdited(values)
        history.push('/')
        dispatch(getProducts(history))
    }

    return (
        <div className="editInputs">
            <div className="inputs">
                <label>Title</label>
                <input onChange={handleEditInp} className="edit" value={values.title}
                name="title" placeholder="Title" type="text" />
                <label>Type</label>
                <input onChange={handleEditInp} className="edit" value={values.type}
                name="type" placeholder="Type" type="text" />
                <label>Price</label>
                <input onChange={handleEditInp} className="edit" value={values.price}
                name="price" placeholder="Price" type="number"/>
                <label>Description</label>
                <input onChange={handleEditInp} className="edit" value={values.description}
                name="description" placeholder="Description" type="text" />
                <label>Image</label>
                <input onChange={handleEditInp} className="edit" value={values.image}
                name="image" placeholder="Image URL" type="text" />
                <Link to={`/`}>
                <button id="saveEdited" onClick={()=>handleSave()}>Save</button>
                </Link>
                </div>
        </div>
    );
};

export default EditProduct;