import {useState} from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux';
import { set } from 'js-cookie';
import {useHistory} from 'react-router-dom';

const MovieBooking = () => {

    const history = useHistory();
    const [numberOfTickets, setNumberOfTickets] = useState("");
    const [bookingDate, setBookingDate] = useState("");
    const [showType, setShowType] = useState("");
    // const [movieName, setMovieName] = useState("");
    const user = useSelector(state=>state.user);
    const movieName = useSelector(state=>state.selectedMovie);

    const buyMovie = () => {

        axios.post("http://localhost:3000/booking", { movieName, numberOfTickets, showType, bookingDate, user })
                    .then(function (response) {
                        console.log(response)
                        setBookingDate("");
                        setNumberOfTickets("");
                        setShowType("");
                        alert("Your Movie is booked!!!");
                        history.push("/user");
                        
                    })
                    .catch(function (error) {
                        console.log(error);
                    })

    }



    return (
        <div className="container">
              <div className="row">
                <label className="form-label">Movie Name:</label>
                <input value={movieName} id="movieName" type="text" className="form-control" required />
            </div>
            <div className="row">
                <label className="form-label">No. of Tickets:</label>
                <input  onChange={(e)=>setNumberOfTickets(e.target.value)}  id="lname" type="number" className="form-control" placeholder="enter the number of tickets" required />
            </div>
            <div className="row">
                <label className="form-label">Date:</label>
                <input  id="bookingdata"  onChange={(e)=>setBookingDate(e.target.value)} type="date" className="form-control" required />
            </div>
            <div className="row">
                <label className="form-label">Showtype:</label>
                <select onChange={(e)=>setShowType(e.target.value)}  className="form-control" id="showtype">
                    <option>Morning Time</option>
                    <option>Noon Time</option>
                    <option>Evening Time</option>
                    <option>Night Time</option>
                </select>    
            </div>
            <div className="row">
                <button className="btn btn-primary button" onClick={()=>buyMovie()} >Book Now</button>
            </div>
        </div>
    );
}

export default MovieBooking;