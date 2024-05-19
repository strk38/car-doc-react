
const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
    const { _id, img, service, customerName, email, phone, message, price, currentDate, status } = booking;


    return (
        <>
            <tbody>
                {/* row 1 */}
                <tr>
                    <th>
                        <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </th>
                    <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={img} alt="" />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold">{service}</div>
                                <div className="text-sm opacity-50">{message}</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="items-center gap-3">
                            <div className="font-bold">{customerName}</div>
                            <div className="text-sm opacity-50">{email}</div>
                            <div className="text-sm opacity-50">{phone}</div>
                        </div>
                    </td>
                    <td>
                        $ {price}
                    </td>
                    <td>{currentDate}</td>
                    <th>
                        {status === 'confirm' ? <span className="font-bold">Confirmed</span> :
                            <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
                        }

                    </th>
                </tr>
            </tbody>
        </>
    );
};

export default BookingRow;