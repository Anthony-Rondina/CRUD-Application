const React = require('react')
const DefaultLayout = require('../Default')

class Index extends React.Component {
    render() {
        const { session } = this.props
        return (
            <DefaultLayout session = {session}>
                <div className="homeBackground">
                    <div className="outMost">
                        <div className="upperOptions">
                            <div
                                className='outerContainer'>
                                <div id="carouselExampleControls " className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img className="d-block w-100" src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80" alt="First slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src="https://images.unsplash.com/photo-1591105327764-4c4b76f9e6a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3271&q=80" alt="Second slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80" alt="Third slide" />
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                            <div className="cardHolder">
                                <div className="card" style={{ width: 18 + "rem;" }}>
                                    <img className="card-img-top" src="https://media.npr.org/assets/img/2020/07/04/gettyimages-1212201194-4ec3c82a40a41644543a69d931a6140a8a939c35-s1200-c85.webp" alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Shop Games</a>
                                    </div>
                                </div>
                                <div className="card" style={{ width: 18 + "rem;" }}>
                                    <img className="card-img-top" src="https://flyingcdn-942385.b-cdn.net/wp-content/uploads/2020/09/Mens-Fall-Fashion-new-banner2.jpg" alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Shop Fashion</a>
                                    </div>
                                </div>
                                <div className="card" style={{ width: 18 + "rem;" }}>
                                    <img className="card-img-top" src="https://nationaltoday.com/wp-content/uploads/2020/02/national-clean-out-your-computer-day.jpg" alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Shop Electronics</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        )
    }

}

module.exports = Index;