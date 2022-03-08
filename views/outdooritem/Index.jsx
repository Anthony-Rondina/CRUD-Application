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
        const { outdoorItem } = this.props
        return (
            <DefaultLayout>
                <div className="resultsWrapper">
                    <div className="displayResults">
                        <h2 className='results'> Displaying <span>{totalEntries(outdoorItem)}</span> results for "Outdoor Games"</h2>
                        <div className='relatedSearch'>
                            <span >Related search: </span>
                            <a href="http://localhost:8000/indooritem">"Indoor Games"</a>
                        </div>
                        <a href="http://localhost:8000/outdoorItem/new" type="button" className="btn btn-primary indexbtn">Create Listing</a>
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
                        <span>Helmets & Protective Wear</span>
                        <br />
                        <span>Fitness</span>
                        <br />
                        <span>Water Sports</span>
                        <br />
                        <span>Disc Golf</span>
                        <br />
                        <span>Electronics</span>
                        <br />
                        <span>Sports & Outdoor Play Toys</span>
                        <br />
                        <span>Educational Equipment</span>
                        <br />
                        <span>Kids' Section</span>
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
                        <p className="bold">Search By Character</p>
                        <span>Marvel</span>
                        <br />
                        <span>Tom Brady</span>
                        <br />
                        <span>Micheal Jordan</span>
                        <br />
                        <span>Scottie Pippin</span>
                        <br />
                        <span>Magic Johnson</span>
                        <br />
                        <span>Iron Man</span>
                        <br />
                        <span>Hulk</span>
                        <br /><br />
                        <p className="bold">Brand</p>
                        <input type="checkbox" /> <span> Nike</span> <br />
                        <input type="checkbox" /> <span> Adidas</span> <br />
                        <input type="checkbox" /> <span> Target</span> <br />
                        <input type="checkbox" /> <span> Nerf</span> <br />
                        <input type="checkbox" /> <span> Hasbro</span> <br />
                        <input type="checkbox" /> <span> Steam</span> <br />
                        <input type="checkbox" /> <span> NFL</span> <br />
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
                            outdoorItem.map((item) => (

                                <article className='productsList'>
                                    <div className="card" style={{ width: 18 + "rem;" }}>
                                        <img className="card-img-top" src={`${item.img}`} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">{`${item.title}`}</h5>
                                            <h5 className="card-title">{`$${item.price}`}</h5>
                                            {item.prime ? 'Eligible for Prime!' : 'Not available for Prime'}
                                            <p></p>
                                            <p className="card-text">{`${item.description}`}</p>
                                            <a href={`/outdoorItem/${item._id}`} className="btn btn-primary">Go to listing</a>
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