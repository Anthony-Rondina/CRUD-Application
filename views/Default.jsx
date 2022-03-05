const React = require('react')
class DefaultLayout extends React.Component {
    render() {
        const { saleItem } = this.props // equal to const saleItem = this.props.saleItem
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
                    <script
                        src="https://code.jquery.com/jquery-3.6.0.min.js"
                        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
                        crossOrigin="anonymous"
                    ></script>
                    {/* <script src="/app.js" defer></script> */}
                </head>
                <body>
                    <div class="pageContainer">
                        <div class="contentWrap">
                            <header>
                                <div class="topHalf">
                                    <div class="top1">
                                        <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" class="amazonLogo bar" />
                                        <div class="TopHalfItem2 bar">
                                            📍
                                            <div class="helloSelect">
                                                <span class="hello">Hello</span>
                                                <br />
                                                <span class="selectAddress">Select your address</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="topHalfItem3">
                                        <div class="allButtonDiv">
                                            <button class="allButton">All</button>
                                        </div>
                                        <input type="text" value="search" class="topInput" />
                                        <div class="magnifyingGlass">🔍</div>
                                    </div>
                                    <div class="top3">
                                        <div class="topHalfItem4 bar">
                                            <span class="flag">🇺🇸</span>
                                        </div>
                                        <div class="topHalfItem5 bar">
                                            <a class="hello2">Hello, Sign in</a>
                                        </div>
                                        <div class="topHalfItem6 bar">
                                            <span class="returns">Returns</span>
                                            <span
                                                class="orders">/ Orders</span>
                                        </div>
                                        <div class="topHalfItem7 bar">
                                            <span class="cartIcon">🛒</span>
                                            <span class="cart"> Cart</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="bottomHalf">
                                    <ul>
                                        <li class="bar">All</li>
                                        <li class="bar">Best Sellers</li>
                                        <li class="bar">Amazon Basics</li>
                                        <li class="bar">New Releases</li>
                                        <li class="bar">Customer Service</li>
                                        <li class="bar">Today's Deals</li>
                                        <li class="bar">Prime</li>
                                    </ul>
                                </div>
                            </header>
                        </div>
                        <main>
                            {this.props.children}
                        </main>
                        <footer class="footer">
                            <div class="row1">
                                <span >Get to know us</span>
                                <div class="row1Links">
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
                            <div class="row2">
                                <span >Make money with us</span>
                                <div class="row2Links">
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
                            <div class="row3">
                                <span >Amazon Payment Products</span>
                                <div class="row3Links">
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
                            <div class="row4">
                                <span >Let us help you</span>
                                <div class="row4Links">
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
                        </footer>
                    </div>
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout