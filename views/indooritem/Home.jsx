const React = require('react')
const DefaultLayout = require('../Default')

class Index extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <div className="homeBackground">
                    <div className="outMost">
                        <h1>Your Home page is working!</h1>
                        <div className='outerContainer'>
                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
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