import React, { Component } from 'react';
import { Media, Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);

    }
    rendercomments(comments) {
        let i, x = "";
        for (i in comments) {
            x += comments[i].comment + "\n" + comments[i].author + "," + comments[i].date + "    "

        }
        return (
            <div className="row">
                <div className="col-md-10 m-1">

                    <h3>Comments</h3>

                    <p> {x}</p>
                </div>
            </div>
        )

    }

    render() {
        var name = this.props.dishes.comments
        console.log(name)
        const SelectedItem = this.props.dishes
        return (
            <div className="container">
                <div className="row">
                    <div key={SelectedItem.id} className="col-sm-6 col-md-5 m-3">
                        <Card>

                            <CardImg width="100%" object src={SelectedItem.image} alt={SelectedItem.name} />
                            <CardBody>
                                <CardTitle>{SelectedItem.name}</CardTitle>
                                <CardText> {SelectedItem.description}</CardText>
                            </CardBody>

                        </Card>
                    </div>
                    <div className="col-sm-6 col-md-6 m-3">

                        {this.rendercomments(this.props.dishes.comments)}
                    </div>
                </div>



            </div>
        )
    }

}
export default DishDetail