import React from 'react';
import './SingleFood.css'

const SingleFood = ({ food }) => {
    console.log(food);
    return (
        <div className='card'>
            <img src={food?.strMealThumb} alt='' />
            <h3>Name : {food.strMeal}</h3>
            <h4>Type : {food.strArea}</h4>
            <button>Add to cart</button>


        </div>
    );
};

export default SingleFood;