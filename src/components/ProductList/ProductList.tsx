import axios from 'axios';
import { auth } from 'firebase';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { MdAddBusiness } from 'react-icons/md';
import { FcSearch } from 'react-icons/fc';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getProducts } from '../../store/action-creator/Coffee';
import '../../Styles/styles.css'

const ProductList = () => {
    const { currentUser } = auth()
    const history = useHistory()
    const { coffees } = useTypedSelector( state => state.product)
    const dispatch = useDispatch()
    const [searchVal, setSearchVal] = useState(getSearchVal() ||'')

    useEffect(()=>{
        dispatch(getProducts(history))
    }, []);
    
    // ! Search
        
    function getSearchVal(){
        const search = new URLSearchParams(history.location.search)
        return search.get('title_like')
    }
    
    const handleValue = (e:any) => {
        setSearchVal(e.target.value)
        const search = new URLSearchParams(history.location.search)
        search.set('title_like', e.target.value);
        history.push(`${history.location.pathname}?${search.toString()}`)
        setSearchVal(e.target.value)
        dispatch(getProducts(history))
    }

    // ! Delete Product
    const deleteProduct= async (id:number)=>{
        try {
            let {status} = await axios.delete(`http://localhost:8000/products/${id}`)
            if (status <= 200) {
                dispatch(getProducts(history))
            }
        } catch(e){
            console.log(e);
        }    
    }


    return (
        <div className="list" >
            <input id="search_inp" type="text" placeholder="Search..." value={searchVal} onChange={handleValue}/>
            <button id="search_btn" onClick={()=>dispatch(getProducts(history))}><FcSearch id="search_icon"/> Search</button>
            {coffees.map(item=>
                <div key={item.id} className="product">
                    <Link to={`/detail/${item.id}`} style={{textDecoration:'none'}}>
                        <img className="coffee_image" src={item.image} alt="coffe" />
                    </Link>
                    <div className="productInfo">
                        <div className="name_price" style={{display:'flex'}}>
                            <h3>{item.title}</h3>
                            <p>${item.price}</p>
                        </div>
                        <p id="description">{item.description} <br />
                            {currentUser?.email==='zhanybaev1211@gmail.com'? 
                                (<>
                                    <button className="btn" onClick={()=>deleteProduct(item.id)}>Delete</button>
                                    <Link to={`/edit/${item.id}`} style={{textDecoration:'none'}}>
                                        <button className="btn">Edit</button>
                                    </Link>
                                </>):
                                <></>
                            }
                        </p>
                    </div>
                </div>
            )}
            {currentUser?.email==='zhanybaev1211@gmail.com'?
                (<div id="add_link">
                    <Link id="add_link" style={{textDecoration:'none', color:'#099', textAlign:'center'}} to="/add">
                        <button id="add_beverage">
                            <MdAddBusiness id='add_icon'/> Add Beverage
                        </button>
                    </Link>
                </div>):
                (<></>)
                }
        </div>
    );
};

export default ProductList;                   