import React, { Component } from 'react';
import { Label, Button, Modal, ModalHeader, ModalBody, Row } from 'reactstrap';
import { Control, Errors, LocalForm } from 'react-redux-form';

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
        console.log("current state" + JSON.stringify(values));
        alert("current state" + JSON.stringify(values));

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
export default Commentsform;