import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { availableProduct, removeProduct } from '../redux/productSlice';
import MyButton from './UI/MyButton';
import ProductUpdate from './ProductUpdate';

const ProductList = () => {

  const [updateProductId, setUpdateProductId] = useState(null);
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  
  const handleUpdate = (id) => {
    setUpdateProductId(id === updateProductId ? null : id);
  };

  const handleSubmitUpdate = () => {
    setUpdateProductId(null);
  };

  return (
      <div className='container'>
      {products.length === 0 ? <h2>Продукты отсутствуют</h2> : <h2>Продукты</h2>}
        <div className='d-flex flex-wrap'>
          {products.map((product) => 
          (updateProductId === product.id ? 
            (
              <ProductUpdate product={product} onFinishEdit={handleSubmitUpdate}/>
            ) : 
            (<div className='card p-2 m-2' style={{width:'300px'}} key={product.id}>
              <h5 className='card-title m-0 p-1'>Наименование: {product.name}</h5>
              <p className='card-body m-0 p-1'>Описание: {product.description}</p>
              <p className='card-body m-0 p-1'>Стоимость: {product.price}$</p>
              <p className='card-body m-0 p-1'>Наличие: {product.available === true ? "Да" : "Нет"}</p>
              <div className='d-flex flex-column'>
                <MyButton 
                  className="btn btn-success m-2"
                  onClick={() => handleUpdate(product.id)}>
                  Редактировать
                </MyButton>
                <MyButton 
                  className="btn btn-info m-2"
                  onClick={() => dispatch(availableProduct(product.id))}>
                  Наличие  
                </MyButton>
                <MyButton 
                  className="btn btn-danger m-2" 
                  onClick={() => dispatch(removeProduct(product.id))}>
                  Удалить
                </MyButton>
              </div>
            </div>)
          )  
        )}
      </div>
    </div>
  )
}

export default ProductList