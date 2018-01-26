import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients)
      .map(igKey => {
        return (
          <li key={igKey}>
            <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
          </li> );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingedients:</p>
      <ul>
        {ingredientsSummary}
      </ul>
      <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
    </Aux>
  );
};

export default orderSummary;
