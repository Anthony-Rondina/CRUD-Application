const React = require('react')
const DefaultLayout = require('../Default')

class Edit extends React.Component {
    render() {
        const { indoorItem } = this.props;
        return (
            <DefaultLayout>
                <div className="edit-outmost-wrapper">
                    <div className="editOuterWrapper">
                        <form action={`/indoorItem/${indoorItem._id}?_method=PUT`} method="post">
                            <fieldset>
                                <div className="editName">
                                    <legend>Edit: {indoorItem.title}</legend>
                                    <label>
                                        Link:<input
                                            type="text"
                                            name="img"
                                            placeholder="image link"
                                            defaultValue={indoorItem.img}
                                        />
                                    </label>
                                </div>
                                <div className="editTitle">
                                    <label>
                                        Title:<input
                                            type="text"
                                            name="title"
                                            placeholder=" item title"
                                            defaultValue={indoorItem.title}
                                        />
                                    </label>
                                </div>
                                <div className="editPrice">
                                    <label>
                                        Price:<input
                                            type="number"
                                            name="price"
                                            placeholder=" item price"
                                            defaultValue={indoorItem.price}
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
                                            defaultValue={indoorItem.description}
                                        />
                                    </label>
                                </div>
                                <div className="prime">
                                    <label>
                                        Prime Eligible: {this.props.indoorItem.prime ? <input type="checkbox" name="prime" defaultChecked /> : <input type="checkbox" name="prime" />}
                                    </label>
                                </div>
                            </fieldset>
                            <div className="showButtons">
                                <a href={`/indooritem/${indoorItem._id}`} class="btn btn-secondary">Cancel</a>
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