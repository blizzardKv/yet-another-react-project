import EmptyBasket from '../components/Basket/EmptyBasket';
import BasketContent from '../components/Basket/BasketContent';
import {Fragment} from 'react';

export default function Basket() {
  return (
    <Fragment>
      <EmptyBasket />

      <BasketContent />
    </Fragment>
  )
}
