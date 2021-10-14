import React from 'react'
import "./productList.css"
import Product from "../product/Product"
import {products} from "../../data"

export default function ProductList() {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Create and inspire. It's Robert</h1>
                <p className="pl-desc">
                Robert is a creative portfolio that your work has been waiting for.
                Beautiful homes, stunning portfolio styles and a whole lot more awaits
                inside.
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) =>(
                <Product key={item.id} img={item.img}  link={item.link}/>
                ))}
            </div>
        </div>
    )
}