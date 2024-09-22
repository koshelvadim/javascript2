import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addProduct } from '../redux/productSlice';
import MyButton from './UI/MyButton';

const ProductForm = () => {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [available, setAvailable] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct({ name, description, price, available }));
    resetInputValue();
  }

  const resetInputValue = () => {
    setName('');
    setDescription('');
    setPrice('');
    setAvailable(false);
  }

  const checkInputName = (e) => {
    if (e.target.value.trim() === '') {
      setName('');
      e.target.labels[0].innerText = 'Пустое поле не допустимо!';
      e.target.labels[0].style = 'color: red';
    } else {
      e.target.labels[0].innerText = 'Имя продукта';
      e.target.labels[0].style = 'color: black';
      setName(e.target.value)
    }
  }

  const checkInputDescription = (e) => {
    if (e.target.value.trim() === '') {
      setDescription('');
      e.target.labels[0].innerText = 'Пустое поле не допустимо!';
      e.target.labels[0].style = 'color: red';
    } else {
      e.target.labels[0].innerText = 'Описание продукта';
      e.target.labels[0].style = 'color: black';
      setDescription(e.target.value)
    }
  }

  return (
    <div className='container m-4'>
      <h2>Форма ввода продукта</h2>
      <form className='form' onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">Имя продукта</label>
          <input 
            className="form-control" 
            type='text'
            value={name} 
            onChange={(e) => {checkInputName(e)}}
            required 
            id="inputName"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputDescription" className="form-label">Описание продукта</label>
          <input 
            className="form-control"
            type='text' 
            value={description} 
            onChange={(e) => {checkInputDescription(e)}}
            required  id="inputDescription" />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPrice" className="form-label">Стоимость продукта</label>
          <input 
            className="form-control"
            type='number' 
            value={price} 
            onChange={(e) => {setPrice(e.target.value)}}
            required  
            id="inputPrice" />
        </div>
        <div className="mb-3 form-check">
          <input 
            type="checkbox" 
            className="form-check-input" 
            checked={available} 
            onChange={(e) => {setAvailable(e.target.checked)}}
            id="checkboxAvailable" 
          />
          <label className="form-check-label" htmlFor="checkboxAvailable">Наличие</label>
        </div>
        <MyButton type="submite" className="btn btn-primary">Добавить продукт</MyButton>
      </form>

    </div>
  )
}

export default ProductForm;