import React, { Component } from 'react';
import { Card, CardImg,  CardTitle, CardBody, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Label, Button, Modal, ModalHeader, ModalBody, Row } from 'reactstrap';
import { Control, Errors, LocalForm } from 'react-redux-form';
import { Loading } from './loadingComponent';
import { baseUrl } from '../shared/baseUrl';

const required = (val) => val && val.length;
const maxlength = (len) => (val) => !(val) || (val.length <= len);
const minlength = (len) => (val) => (val) && (val.length >= len);

class Commentsform extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,

        }
        this.togglesubmit = this.togglesubmit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    togglesubmit() {
        this.setState({
            isOpen: !this.state.isOpen
        })

    }
    handleSubmit(values) {
        // console.log("current state" + JSON.stringify(values));
        // alert("current state" + JSON.stringify(values));
         this.props.addComment(this.props.dishId, values.rating, values.author,values.comment)
    }

    render() {

        return (
            <div className="container">
                <LocalForm >
                    <Row className="form-group" >
                        <Button outline onClick={this.togglesubmit}>
                            <span className="fa fa-pencil"></span>  Submit comment
                    </Button>
                    </Row>
                </LocalForm>


                <Modal isOpen={this.state.isOpen} toggle={this.togglesubmit}>
                    <ModalHeader toggle={this.togglesubmit}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group" >
                                <Label>Rating</Label>
                                <Control.select model=".Rating" name="Rating" className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Row>
                            <Row className="form-group" >
                                <Label>Your Name</Label>
                                <Control.text model=".name" name="name" id="name" className="form-control" placeholder="Your Name" validators={{
                                    required, minlength: minlength(3), maxlength: maxlength(15)
                                }} />
                                <Errors className="text-danger" model=".name" show="touched" messages={{
                                    required: "field Required", minlength: "it should be minimum 3 alphabets", maxlength: "it should only be 15 characters not more"
                                }} />
                            </Row>
                            <Row className="form-group" >
                                <Label>Comments</Label>
                                <Control.textarea model=".comment" name="comments" className="form-control" id="comments" splaceholder="enter the comments" rows="6" />
                            </Row>
                            <Row className="form-group" >
                                <Button type="submit" className="bg-primary" name="submit">Submit</Button>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}


function Rendercomments({ comments, addComment,dishId }) {
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
                <Commentsform dishId={dishId} addComment={addComment}/>
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
    if(props.isLoading){
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        )
    }
    else if(props.errMess){
        return(
            <div className="container">
                <div className="row">
        <h4>{props.errMess}</h4>
                </div>
            </div>
        )

    }
    else if(SelectedItem !=null){
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

                        <CardImg width="100%" object src={baseUrl + SelectedItem.image} alt={SelectedItem.name} />
                        <CardBody>
                            <CardTitle>{SelectedItem.name}</CardTitle>
                            <CardText> {SelectedItem.description}</CardText>
                        </CardBody>

                    </Card>
                </div>
                <div className="col-sm-6 col-md-6 m-1">

                    <Rendercomments comments={props.comments} 
                    addComment={props.addComment}
                    dishId={props.dish.id}/>
                    
                </div>
            </div>



        </div>
    )
}
else
    return(
        <div></div>
    )
}


export default DishDetailFunction