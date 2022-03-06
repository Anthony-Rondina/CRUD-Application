const React = require('react')
const DefaultLayout = require('../Default')

class Edit extends React.Component {
    render() {
        const { outdoorItem } = this.props;
        return (
            <DefaultLayout>
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
                                <label>
                                    Prime Eligible: {this.props.outdoorItem.readyToEat ? <input type="checkbox" name="readyToEat" defaultChecked /> : <input type="checkbox" name="readyToEat" />}
                                </label>
                            </div>
                        </fieldset>
                        <div className="showButtons">
                            <a href={`/outdooritem/${outdoorItem._id}`} class="btn btn-secondary">Cancel</a>
                            <input class="btn btn-warning" type="submit" value={`Save and Finish`} />
                        </div>
                    </form>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Edit