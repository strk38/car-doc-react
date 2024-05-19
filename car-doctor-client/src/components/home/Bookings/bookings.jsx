import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/authProvides";
import { url_default } from "../../../routes/url_main";
import BookingRow from "./bookingRow";
import BookingBanner from "./bookingBanner";
import axios from "axios";



const Bookings = () => {
    const { user } = useContext(AuthContext);

    const [bookings, setBookings] = useState([]);

    const handleDelete = id => {
        const proceed = confirm('Are You sure you want to delete?');
        if (proceed) {
            fetch(`${url_default}/orders/${id}`, {
                method: 'DELETE'

            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        //refresh the data in Ui after delete
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining);
                    }
                })
        }
    }

    // adding Order/Booking status: Confirmed upon confirmation
    const handleBookingConfirm = id => {
        fetch(`${url_default}/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('Updated Successfully');
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.filter(booking => booking._id === id);
                    updated.status = 'confirm';

                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings);
                }
            })
    }

    useEffect(() => {
        const fetchBookings = async () => {
            if (user && user.email) {
                const url = `${url_default}/orders?email=${user.email}`;

                try {
                    /* 
                    Alternate for axios

                    const res = await fetch(url);
                    const data = await res.json();
                    // console.log('data', data);
                    setBookings(data);
                    
                    */

                    axios.get(url, { withCredentials: true })
                        .then(res => {
                            setBookings(res.data);
                        })

                } catch (error) {
                    console.error("Error fetching bookings:", error);

                }
            }
        };

        fetchBookings();
    }, [user]);

    // console.log(bookings);
    return (
        <div>
            <BookingBanner data={'Booking Details'}></BookingBanner>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Service Name</th>
                            <th>Customer Info</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    {
                        bookings.map(booking =>
                            <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleBookingConfirm={handleBookingConfirm}></BookingRow>

                        )
                    }


                </table>
            </div>
        </div>
    );
};

export default Bookings;