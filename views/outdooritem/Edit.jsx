const React = require('react')
const DefaultLayout = require('../Default')

class Edit extends React.Component {
    render() {
        const { outdoorItem, session } = this.props
        return (
            <DefaultLayout session = {session}>
                <div className="edit-outmost-wrapper">
                    <div className="editOuterWrapper">
                        <form action={`/outdoorItem/${outdoorItem._id}?_method=PUT`} method="post">
                            <fieldset>
                                <div className="editName">
                                    <legend>Edit: {outdoorItem.title}</legend>
                                    <label>
                                        Link:<input
                                            type="text"
                                            name="img"
                                            placeholder="image link"
                                            defaultValue={outdoorItem.img}
                                        />
                                    </label>
                                </div>
                                <div className="editTitle">
                                    <label>
                                        Title:<input
                                            type="text"
                                            name="title"
                                            placeholder=" item title"
                                            defaultValue={outdoorItem.title}
                                        />
                                    </label>
                                </div>
                                <div className="editPrice">
                                    <label>
                                        Price:<input
                                            type="number"
                                            name="price"
                                            placeholder=" item price"
                                            defaultValue={outdoorItem.price}
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
                                            defaultValue={outdoorItem.description}
                                        />
                                    </label>
                                </div>
                                <div className="prime">
                                    <label>
                                        Prime Eligible: {this.props.outdoorItem.prime ? <input type="checkbox" name="prime" defaultChecked /> : <input type="checkbox" name="prime" />}
                                    </label>
                                </div>
                            </fieldset>
                            <div className="showButtons">
                                <a href={`/outdooritem/${outdoorItem._id}`} class="btn btn-secondary">Cancel</a>
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