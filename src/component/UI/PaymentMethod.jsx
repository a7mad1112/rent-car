
import React from 'react'
import masterCard from '../../assets/all-images/master-card.jpg';
import paypalImg from '../../assets/all-images/paypal.jpg';
import '../../styles/payment-method.css';


const PaymentMethod = () => {
    return <>
        <div className="payment">
            <label htmlFor="bank__pay">
                <input name='payment__way' className='me-2' id='bank__pay' type="radio"/>
                Direct Bank Transfer
            </label>
        </div>

        <div className="payment mt-3">
            <label htmlFor="cheque__pay">
                <input name='payment__way' className='me-2' type="radio" id='cheque__pay'/>
                Cheque Payment
            </label>
        </div>

        <div className="payment mt-3">
            <label htmlFor="">
                <input name='payment__way' className='me-2' type="radio"/>
                Direct Bank Transfer
            </label>
        </div>

        <div className="payment mt-3 d-flex align-items-center justify-content-between">
            <label htmlFor="card__pay">
                <input name='payment__way' className='me-2' id='card__pay' type="radio"/>
                Master Card
            </label>
            <img src={masterCard} alt="master-cards" />
        </div>

        <div className="payment mt-3 d-flex align-items-center justify-content-between">
            <label htmlFor="paypal__pay">
                <input name='payment__way' className='me-2' id='paypal__pay' type="radio"/>
                Paypal
            </label>
            <img src={paypalImg} alt="paypal-img" />
        </div>
        <div className='payment text-end mt-5'>
            <button>Reverse Now</button>
        </div>
    </>
}

export default PaymentMethod