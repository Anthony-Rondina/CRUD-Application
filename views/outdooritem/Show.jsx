const React = require('react');
const DefaultLayout = require('../Default')

class Show extends React.Component {
    render() {
        const { outdoorItem } = this.props
        return (
            <DefaultLayout>
                <div className="showButtonDiv">
                    <div className="showButtonSmallDiv">
                        <a href="/outdooritem/"><button class="btn btn-primary">Back to Search Results</button></a>
                        <a href={`/outdooritem/${outdoorItem._id}/Edit`}><button class="btn btn-primary" >Edit Listing</button></a>
                        <form action={`/outdooritem/${outdoorItem._id}?_method=DELETE`} method="POST">
                            <input class="btn btn-primary" type="submit" value="Delete Listing" />
                        </form>
                    </div>
                </div>
                <div className="showMainWrapper">
                    <div class="showOutterWrapper">
                        <div className="showImage">
                            <img className="card-img-top" src={`${outdoorItem.img}`} alt="Card image cap" />
                        </div>
                        <div className="showItemInfo">
                            <h2>{`${outdoorItem.title}`}</h2>
                            <p>{`${outdoorItem.description}`}</p>
                        </div>
                        <article class="showEdit">

                            <h3>Price: {`$${outdoorItem.price}`}</h3>

                        </article>
                    </div>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Show