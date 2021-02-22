import { Tabs, Tab } from 'react-bootstrap'
import MovieList from '../MovieList/movieList.component';
import SignUp from '../signup/signUp.component';
import movieData from '../../data/movieList';
import MovieOffers from '../MovieOffers/movieOffers.component';
import MovieBooking from '../movieBooking/movieBooking.component';
import BookedMovieRecords from '../bookedMovieRecords/bookedMovieRecords.Component';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookedMovieRecords } from '../../actions/actions';
import { useEffect } from 'react';
import axios from 'axios';

const UserTabs = () => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    useEffect(() => {

        console.log("User Tabs Called");

        if (Object.keys(user).length > 0) {
            axios.get("http://localhost:3000/booking", { params: { name: user.firstName } })
            .then(function (response) {
                console.log(response.data.data);
                response.data.data.map(item => {
                    dispatch(fetchBookedMovieRecords(item));
                })
            })
            .catch(function (error) {
                console.log(error);
            });
        }

    })



    return (
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Home">
                <MovieList movies={movieData} />
            </Tab>
            <Tab eventKey="Offers" title="View My Offers">
                <MovieOffers />
            </Tab>
            <Tab eventKey="past Movies" title="My Past Movie">
                <BookedMovieRecords />
            </Tab>
        </Tabs>
    );


}

export default UserTabs;