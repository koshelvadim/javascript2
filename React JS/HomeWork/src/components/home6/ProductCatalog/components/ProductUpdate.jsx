import React, { useState } from 'react'
import MyButton from './UI/MyButton';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../redux/productSlice';

const ProductUpdate = ({ product, onFinishEdit }) => {

  const [nameEdit, setNameEdit] = useState('');
  const [descriptionEdit, setDescriptionEdit] = useState('');
  const [priceEdit, setPriceEdit] = useState('');
  const [availableEdit, setAvailableEdit] = useState(false);
  const dispatch = useDispatch();
  const id = product.id;

  const handleSubmit = (e) => {
    e.preventDefault();
    const editProduct = {
      name:nameEdit,
      description:descriptionEdit,
      price:priceEdit, 
      avaliable:availableEdit,
      id 
    };
    dispatch(updateProduct(editProduct));
    onFinishEdit();
  }

  const checkInputName = (e) => {
    if (e.target.value.trim() === '') {
      setNameEdit('');
      e.target.labels[0].innerText = 'Пустое поле не допустимо!';
      e.target.labels[0].style = 'color: red';
    } else {
      e.target.labels[0].innerText = 'Имя продукта';
      e.target.labels[0].style = 'color: black';
      setNameEdit(e.target.value)
    }
  }

  const checkInputDescription = (e) => {
    if (e.target.value.trim() === '') {
      setDescriptionEdit('');
      e.target.labels[0].innerText = 'Пустое поле не допустимо!';
      e.target.labels[0].style = 'color: red';
    } else {
      e.target.labels[0].innerText = 'Описание продукта';
      e.target.labels[0].style = 'color: black';
      setDescriptionEdit(e.target.value)
    }
  }

  return (
    <div className='container m-4'>
      <h2>Форма редактирования продукта</h2>
      <form className='form' onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="inputNameEdit" className="form-label">Имя продукта</label>
          <input
            className="form-control" 
            type='text'
            placeholder={product.name}
            value={nameEdit} 
            onChange={(e) => {checkInputName(e)}}
            required 
            id="inputNameEdit"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputDescriptionEdit" className="form-label">Описание продукта</label>
          <input
            className="form-control"
            type='text'
            placeholder={product.description} 
            value={descriptionEdit} 
            onChange={(e) => {checkInputDescription(e)}}
            required  id="inputDescriptionEdit" />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPriceEdit" className="form-label">Стоимость продукта</label>
          <input 
            className="form-control"
            type='number'
            placeholder={product.price}  
            value={priceEdit} 
            onChange={(e) => {setPriceEdit(e.target.value)}}
            required  
            id="inputPriceEdit" />
        </div>
        <div className="mb-3 form-check">
          <input 
            type="checkbox" 
            className="form-check-input" 
            checked={availableEdit} 
            onChange={(e) => {setAvailableEdit(e.target.checked)}}
            id="checkboxAvailableEdit" 
          />
          <label className="form-check-label" htmlFor="checkboxAvailableEdit">Наличие</label>
        </div>
        <MyButton type="submite" className="btn btn-primary">Изменить продукт</MyButton>
      </form>
    </div>
  )
}

export default ProductUpdate