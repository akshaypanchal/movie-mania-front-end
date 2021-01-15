import { Tabs, Tab } from 'react-bootstrap'
import MovieList from '../MovieList/movieList.component';
import SignUp from '../signup/signUp.component';
import movieData from '../../data/movieList';
import MovieOffers from '../MovieOffers/movieOffers.component';

const UserTabs = () => {

    return (
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Home">
                <MovieList movies = {movieData}/>
            </Tab>
            <Tab eventKey="Offers" title="View My Offers">
                <MovieOffers />
            </Tab>
            <Tab eventKey="past Movies" title="My Past Movie">
                <SignUp />
            </Tab>
        </Tabs>
    );


}

export default UserTabs;