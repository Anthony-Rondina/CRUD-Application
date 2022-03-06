const React = require('react')
const DefaultLayout = require('../Default')

class Edit extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <div className="editOuterWrapper">
                    <form action="/indooritem" method="post">
                        <fieldset>
                            <div className="editName">
                                <legend>Create Indoor Item</legend>
                                <label>
                                    Link:<input
                                        type="text"
                                        name="img"
                                        placeholder="image link"
                                    />
                                </label>
                            </div>
                            <div className="editTitle">
                                <label>
                                    Title:<input
                                        type="text"
                                        name="title"
                                        placeholder=" item title"
                                    />
                                </label>
                            </div>
                            <div className="editPrice">
                                <label>
                                    Price:<input
                                        type="number"
                                        name="price"
                                        placeholder=" item price"
                                    />
                                </label>
                            </div>
                            <div className="editDescription">
                                <label>
                                    Description:<input
                                        type="textarea"
                                        name="description"
                                        placeholder=" item description"
                                    />
                                </label>
                            </div>
                            <div className="prime">
                                <label> Prime Eligible:<input type="checkbox" name="prime" /> </label>
                            </div>
                        </fieldset>
                        <div className="showButtons">
                            <a href={`http://localhost:8000/indooritem`} className="btn btn-secondary">Cancel</a>
                            <input className="btn btn-warning" type="submit" value={`Save and Finish`} />
                        </div>
                    </form>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Edit