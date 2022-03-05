const React = require('react')
const Default = require('../Default')

class New extends React.Component {
    render() {
        return (
            <Default title="List your item on our page.">
                <div>
                    {/* Comment Zone */}

                    <div>
                        <nav>
                            <a href="/logs">Back to your search</a>
                        </nav>

                        <form action="/logs" method="POST">
                            Image Location <input type="text" name="img" /><br />
                            Description<textarea type="textarea" name="description" ></textarea><br />
                            Price<input type="text" Price="price" /><br />
                            <input type="submit" value="Engage!" />
                        </form>
                    </div>
                </div>
            </Default>
        )
    }
}

module.exports = New;