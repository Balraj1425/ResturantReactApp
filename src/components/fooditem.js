import { useState } from 'react';
import './fooditem.css';

function Fooditems (props){
    let [val1, changeVal] = useState(props.dishName);
    console.log("val1" + val1);
    const updateVal = () => {
        console.log("update called");
        changeVal("Added to cart")
    }
    return (
        <div className='main-food-item'>
            <div className='food-items'>
                {
                    props.dishType === 'Veg' ? 
                    (<span className='item-padding veg'>{props.dishType}</span>):
                    (<span className='item-padding non-veg'>{props.dishType}</span>)
                }
                <strong>{val1}</strong>                
            </div>            
            <button className='food-items' onClick={updateVal}>{props.dishPrice}</button>
        </div>
    );
}
export default Fooditems;