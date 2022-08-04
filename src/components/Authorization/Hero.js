import React from "react";
import Navigation from "../Navigation/Navigation";
import ProductList from "../ProductList/ProductList";
import '../../Styles/styles.css'

const Hero = ({handleLogout}) =>{
    return(
        <section className="hero"  >
                <Navigation handleLogout={handleLogout}/>
                <ProductList/>
        </section>
    )
}

export default Hero;