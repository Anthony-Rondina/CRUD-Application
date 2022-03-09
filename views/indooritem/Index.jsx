const React = require('react')
const DefaultLayout = require('../Default')
let total = 0

const totalEntries = (number) => {

    number.forEach(item => {
        total += 1
    });
    return total
}
class Index extends React.Component {
    render() {
        let itemCount = 0
        const countItem = () => {
            itemCount++
        }
        const { indoorItem } = this.props
        return (
            <DefaultLayout>
                <div className="resultsWrapper">
                    <div className="displayResults">
                        <h2 className='results'> Displaying <span>{totalEntries(indoorItem)}</span> results for "Indoor Games"</h2>
                        <div className='relatedSearch'>
                            <span >Related search: </span>
                            <a href="http://localhost:8000/outdooritem">"Outdoor Games"</a>
                        </div>
                        <a href="http://localhost:8000/indoorItem/new" type="button" className="btn btn-primary indexbtn">Create Listing</a>
                    </div>
                </div>
                <div className='indexOuterSplit'>
                    <div className="indexInnerSplit">
                        <span class="bold">Eligible for Free Shipping</span>
                        <br /> <br />
                        <input type="checkbox" />
                        <span> Free Shipping by Amazon. All customers get FREE Shipping on orders over $25 shipped by Amazon</span>
                        <br />
                        <br />
                        <p class="bold">Deliver Day</p>
                        <input type="checkbox" /> Get it by Tomorrow
                        <br />
                        <br />
                        <p class="bold">Department</p>
                        <span>Games & Accessories</span>
                        <br />
                        <span>Board Games</span>
                        <br />
                        <span>Dedicated Deck Card Games</span>
                        <br />
                        <span>Dice Games</span>
                        <br />
                        <span>Learning & Education Toys</span>
                        <br />
                        <span>Sports & Outdoor Play Toys</span>
                        <br />
                        <span>Industrial & Scientific</span>
                        <br />
                        <span>Kids' Electronics</span>
                        <br />
                        <br />
                        <p class="bold">Customer Review</p>
                        <div className="star-background">

                            <span>⭐️⭐️⭐️⭐️ & up</span>
                            <br />
                            <span>⭐️⭐️⭐️ & up</span>
                            <br />
                            <span>⭐️⭐️ & up</span>
                            <br />
                            <span>⭐️ & up</span>
                            <br />
                        </div>
                        <br />
                        <p className="bold">Toy Character</p>
                        <span>Mickey Mouse</span>
                        <br />
                        <span>Animal Planet</span>
                        <br />
                        <span>Barbie</span>
                        <br />
                        <span>Harry Potter</span>
                        <br />
                        <span>Nerf</span>
                        <br />
                        <span>Disney Princess</span>
                        <br />
                        <span>Marvel</span>
                        <br /><br />
                        <p className="bold">Brand</p>
                        <input type="checkbox" /> <span> Hasbro Gaming</span> <br />
                        <input type="checkbox" /> <span> Ravensburger</span> <br />
                        <input type="checkbox" /> <span> Exploding Kittens</span> <br />
                        <input type="checkbox" /> <span> Monopoly</span> <br />
                        <input type="checkbox" /> <span> Thames & Kosmos</span> <br />
                        <input type="checkbox" /> <span> Magic the Gathering</span> <br />
                        <input type="checkbox" /> <span> Hunt a Killer</span> <br />
                        <br />
                        <p className="bold">Toy & Game Price</p>
                        <span>$25 to $50</span> <br />
                        <span>$50 to $100</span> <br />
                        <span>$100 to $200</span> <br />
                        <span>$200 & Above</span> <br />
                        <div className="priceSearch">
                            <input type="number" placeholder='$Min' /> <input type="number" placeholder='$Max' />
                            <button>Go</button>
                        </div>
                        <br />

                    </div>
                    <div className="indexRightSplit">
                        {
                            indoorItem.map((item) => (

                                <article className='productsList'>
                                    <div className="card" style={{ width: 18 + "rem;" }}>
                                        <a href={`/indooritem/${item._id}`}> <img className="card-img-top" src={`${item.img}`} alt="Card image cap" /></a>
                                        <div className="card-body">
                                            <h5 className="card-title">{`${item.title}`}</h5>
                                            <h5 className="card-title">{`$${item.price}`}</h5>
                                            {item.prime ? 'Eligible for Prime!' : 'Not available for Prime'}
                                            <p></p>
                                            <p className="card-text">{`${item.description}`}</p>
                                            <a href={`/indooritem/${item._id}`} className="btn btn-primary">Go to listing</a>
                                        </div>
                                    </div>
                                </article>
                            ))
                        }
                    </div>
                </div>
            </DefaultLayout>
        )
    }

}

module.exports = Index;