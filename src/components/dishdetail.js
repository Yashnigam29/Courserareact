import React, { Component } from 'react';
import { Media, Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText } from 'reactstrap';

class DishDetail extends Component {

componentDidMount(){
    console.log("dishdetail component didmount invoke");
}

componentDidUpdate(){
    console.log("dishdetail componentdidupdate invoke");
}
    constructor(props) {
        super(props);

    }
    rendercomments(comments) {
         if(comments !=null){
             return(
                 <div className="col-12 col-md-5 m-1">
                     <h4>comments</h4>
                     <ul className="lis.unstyled">
                         {comments.map((comment) =>{
                             return(
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
         else{
             return(
                 <div>

                 </div>
             )
         }

        // let i, x = "";
        // for (i in comments) {
        //     x += comments[i].comment + "\n" + comments[i].author + "," + comments[i].date + "    "

        // }
        // return (
        //     <div className="row">
        //         <div className="col-md-10 m-1">

        //             <h3>Comments</h3>

        //             <p> {x}</p>
        //         </div>
        //     </div>
        // )

    }

    render() {

        console.log("dishdetail  render invoke")
        const SelectedItem = this.props.dish
        return (
            <div className="container">
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

                        {this.rendercomments(this.props.dish.comments)}
                    </div>
                </div>



            </div>
        )
    }

}
export default DishDetail