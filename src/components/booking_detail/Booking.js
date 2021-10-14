import React from "react";
import Currency from "components/currency";

const Booking = (props) => {
    const {booking, checkIn, checkOut, total, status, currency} = props;
    return (
        <>
            <h5 className='display-5'> <strong> Booking Details </strong> </h5>
                <table className='table'>
                    <thead>
                    <tr className='table-success'>
                        <th scope="col">Booking Time</th>
                        <th scope="col">Check-in</th>
                        <th scope="col">Check-out</th>
                        <th scope="col">Total</th>
                        <th scope="col">Status</th>
                    </tr>
                    <tr>
                        <td>{booking}</td>
                        <td>{checkIn}</td>
                        <td>{checkOut}</td> 
                        <td> <Currency amount={total} currency={currency}/> </td>
                        <td>{status}</td>
                    </tr>
                    </thead>
                </table>
        </>
    )
}

export default Booking;