const React = require('react');
const DefaultLayout = require('../Default')

class Show extends React.Component {
    render() {
        const { indoorItem, session } = this.props
        return (
            <DefaultLayout session = {session}>
                <div className="showButtonDiv">
                    <div className="showButtonSmallDiv">
                        <a href="/indooritem/"><button class="btn btn-primary">Back to Search Results</button></a>
                        <a href={`/indooritem/${indoorItem._id}/Edit`}><button class="btn btn-primary" >Edit Listing</button></a>
                        <form action={`/indooritem/${indoorItem._id}?_method=DELETE`} method="POST">
                            <input class="btn btn-primary" type="submit" value="Delete Listing" />
                        </form>
                    </div>
                </div>
                <div className="showMainWrapper">
                    <div class="showOutterWrapper">
                        <div className="showImage">
                            <img className="showImage" src={`${indoorItem.img}`} alt="Card image cap" />
                        </div>
                        <div className="showItemInfo">
                            <h2>{`${indoorItem.title}`}</h2>
                            <hr />
                            <div class="showMidPrice">
                                <span>List Price:</span>
                                <span class="price">{` $${indoorItem.price}`}</span>
                            </div>
                            <br />
                            <p>{`${indoorItem.description}`}</p>

                        </div>
                        <div>
                            <article class="showEdit">
                                <div className="showTopBlock">
                                    <div className="priceDisplay">
                                        <div><input type="radio" defaultChecked /> <span class='bold'>Buy new:</span></div>
                                        <span class="price">{`$${indoorItem.price}`}</span>
                                    </div>
                                    <br />
                                    <p>
                                        {indoorItem.prime ? 'Eligible for Prime!' : 'Not eligible for Prime'}
                                    </p>
                                    <div>
                                        <span>Get </span><span className="bold">Fast, Free Shipping </span> <span>with</span> <a href="">Amazon Prime</a> <span> & </span> <a href="">FREE Returns</a>
                                    </div>
                                    <br />
                                    <h2 className="green">In stock</h2>
                                    <br />
                                    <button className="btn btn-warning yellow roundButton">Add to Cart</button>
                                    <br />
                                    <button className="btn btn-warning orange roundButton">Buy Now</button>
                                </div>

                            </article>
                            <div className="used">
                                <div>
                                    <div>
                                        <input type="radio" /> <span class='bold'>Save with Used - Very Good</span>
                                    </div>
                                    <br />
                                    <span>Free Delivery: Sunday, March 13th on orders over $25.00 shipped by Amazon.</span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Show