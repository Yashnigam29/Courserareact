import React from 'react';
import { Media, Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';



function Rendercomments({ comments }) {
    if (comments != null) {
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>comments</h4>
                <ul className="lis.unstyled">
                    {comments.map((comment) => {
                        return (
                            <li key={comment.id}>
                                <p>
                                    {comment.comment}
                                </p>
                                <p>-- {comment.author} </p>

                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
    else {
        return (
            <div>

            </div>
        )
    }

}

const DishDetailFunction = (props) => {

    console.log("dishdetail  render invoke")
    const SelectedItem = props.dish
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                        <BreadcrumbItem>
                        <Link to="/menu">menu</Link>
                        </BreadcrumbItem>
                    <BreadcrumbItem acive>{props.dish.name}</BreadcrumbItem>

                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div key={SelectedItem.id} className="col-sm-6 col-md-5 m-1">
                    <Card>

                        <CardImg width="100%" object src={SelectedItem.image} alt={SelectedItem.name} />
                        <CardBody>
                            <CardTitle>{SelectedItem.name}</CardTitle>
                            <CardText> {SelectedItem.description}</CardText>
                        </CardBody>

                    </Card>
                </div>
                <div className="col-sm-6 col-md-6 m-1">

                    <Rendercomments comments={props.comments} />
                </div>
            </div>



        </div>
    )
}


export default DishDetailFunction