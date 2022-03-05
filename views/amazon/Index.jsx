const React = require('react')
const DefaultLayout = require('../Default')

class Index extends React.Component {
    render() {
        const { saleItem } = this.props
        return (
            <DefaultLayout>
                <div>

                    {
                        saleItem.map((item) => (
                            <article>
                                <a href={`/saleItem/${item._id}`}>
                                    <h2>
                                        {item.name} - {item.readyToEat ? 'Ripe' : 'Not Ripe Yuck Thats Nasty'}
                                    </h2>
                                </a>
                            </article>
                        ))
                    }
                    <h1>Your Index page is working!</h1>

                </div>
            </DefaultLayout>
        )
    }

}

module.exports = Index;