import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'

const ProductDisplay = (props) => {
    const { product } = props;
    return (
        <div className='ProductDisplay'>
            <div className="ProductDisplay-left">
                <div className="productDisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productDisplay-img">
                    <img src={product.image} alt="" className="productDisplay-main-img" />
                </div>
            </div>
            <div className="productDisplay-right">
                <h1>{product.name}</h1>
                <div className="productDisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p> (122) </p>
                </div>
                <div className="productDisplay-right-price">
                    <div className="productDisplay-right-price-old">
                        &#8377;{product.old_price}
                    </div>
                    <div className="productDisplay-right-price-new">
                        &#8377;{product.new_price}
                    </div>
                </div>
                <div className="productDisplay-right-description">
                    Introducing our premium White Shirt, meticulously crafted
                    from high-quality cotton for exceptional comfort and breathability.
                    Tailored for a flattering fit,ssential.
                </div>
                <div className="productDisplay-right-size">
                    <h1>select size</h1>
                    <div className="productDisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                    <button>Add to Cart</button>
                    <p className="productDisplay-right-category"><span>Category:</span> Women, T-shirt, Crop Top</p>
                    <p className="productDisplay-right-category"><span>Tags:</span> Modern, Latest, Crop Top</p>
                    <p></p>
                </div>

            </div>
        </div>
    )
}

export default ProductDisplay