import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import {
    setTitle,
    setDescription,
    setPrice,
    setCategory,
    setImage,
    createProduct
} from '../redux/actions/productActions';

const ProductCreationForm = (props) => {

    const createProductHandler = () => {
        dispatch(createProduct());
    };

    // dispatch state data back to redux 
    const dispatch = useDispatch();
    const productTitle = useSelector((state) => state.productReducer.title);
    const productDescription = useSelector((state) => state.productReducer.description);
    const productPrice = useSelector((state) => state.productReducer.price);
    const productCategory = useSelector((state) => state.productReducer.category);

   return (
    <div className="product-upload">
        <h3> Create a new product </h3>

        <div className="product-submission">
            {props.isSuccess !== null ? <h4> {props.isSuccess} </h4> : null}
            <div>
                <input placeholde="Title" className="sellerInput-Settings" type="text" value={productTitle} placeholder="Title" onChange={(e) => dispatch(setTitle(e.target.value))}/>
            </div>
            <div>
                <input placeholde="Description" className="sellerInput-Settings" type="text" value={productDescription} placeholder="Description" onChange={(e) => dispatch(setDescription(e.target.value))}/>
            </div>
            <div>
                <input placeholde="Price" className="sellerInput-Settings" type="text" value={productPrice} placeholder="Price" onChange={(e) => dispatch(setPrice(e.target.value))}/>
            </div>
            <div>
                <label> Category </label>
                <select value={productCategory} onChange={(e) => dispatch(setCategory(e.target.value))}>
                    <option value="Clothes"> Clothes </option>
                    <option value="Shoes"> Shoes </option>
                    <option value="Electronics"> Electronics </option>
                </select>
            </div>
            <div>
                <label> Image(s) </label>
                <input placeholde="Image(s)" className="sellerInput-Settings"  type="file" name="product_image" onChange={(e) => dispatch(setImage(e.target.files[0]))}/>
            </div>
            <div>
                <button className="sellerButton-Settings" onClick={createProductHandler}>
                    Create New Product
                </button>
            </div>
        </div>
        {props.filePreview !== null ?
        <img className="preview-img" src={props.filePreview} alt="UploadImage"/>
        : null}
    </div>
   );
};

function mapStateToProps(state) {
    return { 
        isSuccess: state.productReducer.isSuccess,
        filePreview: state.productReducer.filePreview
    };
}

export default connect(mapStateToProps)(ProductCreationForm);
