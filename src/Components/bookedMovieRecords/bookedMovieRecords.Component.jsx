import { useSelector, useDispatch } from 'react-redux';

const BookedMovieRecords = () => {

    const user = useSelector(state => state.user);
    const movieRecords = useSelector(state => state.bookedMovieRecords);

    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Moive Name</th>
                        <th scope="col">Number of Tickets</th>
                        <th scope="col">Showtype</th>
                        <th scope="col">Booking Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        movieRecords.map((item,id)=>
                            <tr>
                                <td>{id+1}</td>
                                <td>{item.movieName}</td>
                                <td>{item.numberOfTickets}</td>
                                <td>{item.showType}</td>
                                <td>{item.bookingDate}</td>
                            </tr>
                        )
                    }
                    
                </tbody>
            </table>

        </div>
    );

}
export default BookedMovieRecords;