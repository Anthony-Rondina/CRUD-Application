const React = require('react')
class DefaultLayout extends React.Component {
    render() {
        const { outdoorItem } = this.props // equal to const saleItem = this.props.saleItem
        return (
            <html lang='en'>
                <head>
                    <meta charSet='UTF-8' />
                    <meta httpEquiv='"X-UA-Compatible' content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Amazon CRUD App</title>
                    <link rel="stylesheet" href="/css/styles.css" />
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
                        integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossOrigin="anonymous" />
                    {/* Jquery */}
                    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
                    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
                    {/* <script src="/app.js" defer></script> */}
                </head>
                <body>
                    <div className="pageContainer">
                        <div className="contentWrap">
                            <header>
                                <div className="topHalf">
                                    <div className="top1">
                                        <a className="amazonLogo bar" href="/"></a>
                                        <div className="TopHalfItem2 bar">
                                            📍
                                            <div className="helloSelect">
                                                <span className="hello">Hello</span>
                                                <br />
                                                <span className="selectAddress">Select your address</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="topHalfItem3">
                                        <div className="allButtonDiv">
                                            <button className="allButton">All</button>
                                        </div>
                                        <input type="text" placeholder="search" className="topInput" />
                                        <a href="/outdooritem" className="magnifyingGlass">🔍</a>
                                    </div>
                                    <div className="top3">
                                        <div className="topHalfItem4 bar">
                                            <span className="flag">🇺🇸</span>
                                        </div>
                                        <div className="topHalfItem5 bar">
                                            <a href="/user/login" className="hello2">Hello, Sign in</a>
                                        </div>
                                        <div className="topHalfItem6 bar">
                                            <span className="returns">Returns</span>
                                            <span
                                                className="orders">/ Orders</span>
                                        </div>
                                        <div className="topHalfItem7 bar">
                                            <span className="cartIcon">🛒</span>
                                            <span className="cart"> Cart</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bottomHalf">
                                    <div className="bottom-half-box">
                                        <ul>
                                            <li className="bar">All</li>
                                            <li className="bar">Best Sellers</li>
                                            <li className="bar">Amazon Basics</li>
                                            <li className="bar">New Releases</li>
                                            <li className="bar">Customer Service</li>
                                            <li className="bar">Today's Deals</li>
                                            <li className="bar">Prime</li>
                                        </ul>

                                    </div>
                                    <a  href="/user/logout"><button class="btn btn-warning logoutButton">Logout</button></a>
                                </div>
                            </header>
                        </div>
                        <main>
                            {this.props.children}
                        </main>
                        <footer className="footer">
                            <div className="rowDiv">
                                <div className="row1">
                                    <div className="row1Links">
                                        <span >Get to know us</span>
                                        <ul>
                                            <li>Careers</li>
                                            <li>Blog</li>
                                            <li>About Amazon</li>
                                            <li>Sustainability</li>
                                            <li>Press Center</li>
                                            <li>Investor Relations</li>
                                            <li>Amazon Devices</li>
                                            <li>Amazon Science</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row2">
                                    <div className="row2Links">
                                        <span >Make money with us</span>
                                        <ul>
                                            <li>Careers</li>
                                            <li>Blog</li>
                                            <li>About Amazon</li>
                                            <li>Sustainability</li>
                                            <li>Press Center</li>
                                            <li>Investor Relations</li>
                                            <li>Amazon Devices</li>
                                            <li>Amazon Science</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row3">
                                    <div className="row3Links">
                                        <span >Amazon Payment Products</span>
                                        <ul>
                                            <li>Careers</li>
                                            <li>Blog</li>
                                            <li>About Amazon</li>
                                            <li>Sustainability</li>
                                            <li>Press Center</li>
                                            <li>Investor Relations</li>
                                            <li>Amazon Devices</li>
                                            <li>Amazon Science</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row4">
                                    <div className="row4Links">
                                        <span >Let us help you</span>
                                        <ul>
                                            <li>Careers</li>
                                            <li>Blog</li>
                                            <li>About Amazon</li>
                                            <li>Sustainability</li>
                                            <li>Press Center</li>
                                            <li>Investor Relations</li>
                                            <li>Amazon Devices</li>
                                            <li>Amazon Science</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout