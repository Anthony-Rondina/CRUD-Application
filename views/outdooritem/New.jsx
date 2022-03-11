const React = require('react')
const DefaultLayout = require('../Default')

class Edit extends React.Component {
    render() {
        const { session } = this.props
        return (
            <DefaultLayout session = {session}>
                <div className="edit-outmost-wrapper">
                    <div className="editOuterWrapper">
                        <form action="/outdoorItem" method="post">
                            <fieldset>
                                <div className="editName">
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
                                        <p>Description:</p>
                                        <textarea
                                            type="text"
                                            name="description"
                                            placeholder=" item description"

                                        />
                                    </label>
                                </div>
                                <div className="prime">
                                    <label>
                                        Prime Eligible: <input type="checkbox" name="prime" />
                                    </label>
                                </div>
                            </fieldset>
                            <div className="showButtons">
                                <a href="/outdooritem/" class="btn btn-secondary">Cancel</a>
                                <input class="btn btn-warning" type="submit" value={`Save and Finish`} />
                            </div>
                        </form>
                    </div>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Edit