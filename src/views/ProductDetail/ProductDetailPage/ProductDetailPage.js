import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProductDetail, selectGetProductDetailLoading, selectProduct } from "../../../features/productDetail/productDetail.slice";
import ProductDetailPageStyles from "./ProductDetailPage.styles";

export const ProductDetailPage = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();

    const { id, image, title, description, category, price, rating } = useSelector(selectProduct);
    const productLoading = useSelector(selectGetProductDetailLoading);

    useEffect(() => {
        dispatch(getProductDetail(productId));
    }, [dispatch, productId])


    if (productLoading) return (
        <ProductDetailPageStyles>
            <h1>Loading Product...</h1>
        </ProductDetailPageStyles>
    );

    return (
        <>

            <ProductDetailPageStyles>
                <div style={{ width: '100%' }}>
                    <Link style={{ fontSize: '1.6rem' }} to={-1}>&#8592; Regresar</Link>
                </div>
                <div className="product__left">
                    <p className="product__title">{title}</p>
                    <img className="" src={image} alt="" />
                </div>
                <div className="product__right">
                    <div className="product__group">
                        <h3 className="product__subtitle">Description</h3>
                        <p className="product__description">{description}</p>
                    </div>
                    <div className="product__group">
                        <h3 className="product__subtitle">Category</h3>
                        <p className="product__category">#{category}</p>
                    </div>

                    <div className="product__group">
                        <h3 className="product__subtitle">Price</h3>
                        <p className="product__price">${price}</p>
                    </div>

                    <div className="product__group">
                        <h3 className="product__subtitle">Rating</h3>
                        {rating && <p className="product__rating">{rating.rate}</p>}
                    </div>
                </div>
            </ProductDetailPageStyles>
        </>

    )
}
