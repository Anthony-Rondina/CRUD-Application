const React = require('react')
const DefaultLayout = require('../Default')

class Index extends React.Component {
    render() {
        const { outdoorItem } = this.props
        return (
            <DefaultLayout>
                <div className="displayResults">
                    <h1 className='results'>Displaying results for "Outdoor Games"</h1>
                    <div>
                        <span className='relatedSearch'>Related search: </span>
                        <a href="http://localhost:8000/indooritem">"Indoor Games"</a>
                    </div>
                    <a href="http://localhost:8000/outdooritem/new" type="button" className="btn btn-primary">Create Listing for a Game</a>
                </div>
                <div className='indexOuterSplit'>
                    <div className="indexInnerSplit">
                    </div>
                    <div className="indexRightSplit">
                        {
                            outdoorItem.map((item) => (
                                <article className='productsList'>
                                    <div className="card" style={{ width: 18 + "rem;" }}>
                                        <img className="card-img-top" src={`${item.img}`} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 clclassNameass="card-title">{`${item.title}`}</h5>
                                            <h5 clclassNameass="card-title">{`$${item.price}`}</h5>
                                            <p className="card-text">{`${item.description}`}</p>
                                            <a href={`/outdooritem/${item._id}`} className="btn btn-primary">Go to listing</a>
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