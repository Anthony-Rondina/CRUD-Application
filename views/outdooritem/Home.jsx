const React = require('react')
const DefaultLayout = require('../Default')

class Index extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <div className="homeBackground">
                    <div className="outMost">
                        <div className="upperOptions">
                            <div className="card" style={{ width: 18 + "rem;" }}>
                                <img className="card-img-top" src="..." alt="Card image cap"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                            </div>
                        </div>
                        <div
                            className='outerContainer'>
                            <div id="carouselExampleControls " className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block w-100" src="https://i.imgur.com/YSLU079.jpg" alt="First slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src="https://i.imgur.com/vvmDZc4.jpg" alt="Second slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src="https://i.imgur.com/h4iC9ha.jpg" alt="Third slide" />
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
                    </div>
                </div>
            </DefaultLayout>
        )
    }

}

module.exports = Index;