import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { productDetail } from '../../store/action-creator/Coffee';
import '../../Styles/styles.css'

const ProductDetail: React.FC = () => {
    const { id } = useParams<{id : string  }>();
    const { detail } = useTypedSelector( state => state.product)
    const dispatch = useDispatch()
                                                                    

    useEffect(()=>{
        dispatch(productDetail(id))
    },[id])

    return (    
        <div>
            <div className="detail">
                <h2>{detail.title}</h2>
                <h3>$ {detail.price}</h3>
                <img src={detail.image}/>
                <p>{detail.description}</p>
            </div>
        </div>
    );
};

export default ProductDetail;