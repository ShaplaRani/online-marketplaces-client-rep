

const Mybids = () => {
    return (
        <div>
        <h2 className="text-5xl">My Bits: {}</h2>
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        
                        
                        <th>Job Title</th>
                        <th>Email</th>
                        <th>Deadline</th>
                        <th>Status</th>
                        <th>Complete</th>
                    </tr>
                </thead>
                <tbody>

                <tr>
           
            
            <td>
            Job Title
            </td>
            <td>Email</td>
            <td>Deadline</td>
            <th>

                statue
                {/* {
                    status === 'confirm' ? <span className="font-bold text-primary">Confirmed</span> 
                    :
                        <button onClick={() => handleBookingConfirm(_id)} 
                        className="btn btn-ghost btn-xs">Please Confirm</button>} */}
            </th>
            <th>
                Complete
            </th>
        </tr>

                    {/* {
                        bookings.map(booking => <BookingRow
                            key={booking._id}
                            booking={booking}
                            handleDelete={handleDelete}
                            handleBookingConfirm ={handleBookingConfirm}
                        ></BookingRow>)
                    } */}
                </tbody>

            </table>
        </div>
    </div>
    );
};

export default Mybids;