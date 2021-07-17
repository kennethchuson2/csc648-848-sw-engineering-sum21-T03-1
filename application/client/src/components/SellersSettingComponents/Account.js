import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import {
    updateFirstName,
    updateLastName,
    updateAccount,
} from '../../redux/actions/sellerSettingsActions';


const Account = () => {

    // dispatch state data back to redux
    const dispatch = useDispatch();
   
    const updateFirst = useSelector((state) => state.sellerSettingsReducer.firstName);
    const updateLast = useSelector((state) => state.sellerSettingsReducer.lastName);

    const updateAccountHandler = () => {
        dispatch(updateAccount());
    };

   return (
    <div className="sellerAccountSettings-wrapper">
        <div className="sellerAccountSettings-firstContainer">
            <div className="sellerAccountSettings-firstContainer_oneSide">
                <p>FirstName</p>
                <input value={updateFirst} onChange={(e) => dispatch(updateFirstName(e.target.value))} type="text"/>
                <p>LastName</p>
                <input value={updateLast} onChange={(e) => dispatch(updateLastName(e.target.value))} type="text"/>
                <p>Birthday</p>
                <input type="date"/>
                <p>Email</p>
            </div>
            <div className="sellerAccountSettings-firstContainer_twoSide">
                <input type="text"/>
                <p>Phone</p>
                <input type="text"/>
                <p>UserName</p>
                <input type="text"/>
                <p>Password</p>
                <input type="text"/>
            </div>
            <div>
                <button onClick={updateAccountHandler}> Update Account </button>
            </div>
        </div>
        <div className="sellerAccountSettings-secondContainer">
            <h3>Credit Debit Card</h3>
            <div className="sellerAccountSettings-secondContainer_oneSide">
                <p>Card Number</p>
                <input type="text"/>
                <p>Expiration Date</p>
                <input type="text"/>
            </div>
            <div className="sellerAccountSettings-secondContainer">
                <p>CVV</p>
                <input type="text"/>
                <p>Postal Code</p>
                <input type="text"/>
            </div>
        </div>
    </div>
   );
};



export default Account;