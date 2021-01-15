const MovieOffers = () => {

    return (
        <div className="container">
            <div class="card">
                <h5 class="card-header">Offer# 1</h5>
                <div class="card-body">
                    <h5 class="card-title">$5</h5>
                    <p class="card-text">see any 5 Movies in a Month</p>
                    <a href="#" class="btn btn-primary">Buy this offer</a>
                </div>
            </div>
            <div class="card">
                <h5 class="card-header">Offer# 2</h5>
                <div class="card-body">
                    <h5 class="card-title">$7</h5>
                    <p class="card-text">Get discount of 5% for all movies for a month</p>
                    <a href="#" class="btn btn-primary">Buy this offer</a>
                </div>
            </div>
            <div class="card">
                <h5 class="card-header">Offer# 3</h5>
                <div class="card-body">
                    <h5 class="card-title">$20</h5>
                    <p class="card-text">Gift Vouchers</p>
                    <a href="#" class="btn btn-primary">Buy this offer</a>
                </div>
            </div>
        </div>
    );

}


export default MovieOffers;