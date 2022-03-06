const React = require('react');
const DefaultLayout = require('../Default')

class Show extends React.Component {
    render() {
        const { indoorItem } = this.props
        return (
            <DefaultLayout>
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
                            <img className="card-img-top" src={`${indoorItem.img}`} alt="Card image cap" />
                        </div>
                        <div className="showItemInfo">
                            <h2>{`${indoorItem.title}`}</h2>
                            <p>{`${indoorItem.description}`}</p>
                        </div>
                        <article class="showEdit">

                            <h3>Price: {`$${indoorItem.price}`}</h3>

                        </article>
                    </div>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Show