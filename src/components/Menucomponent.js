import React, { Component } from 'react';
import { Media, Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText } from 'reactstrap';
import DishDetail from './dishdetail';

class Menu extends Component{

    // constructor(props){
    //     super(props);

        // this.state={
        //     selectedDish: null
           
        // }

    // }
    // onDishSelect(dish){

    //     this.setState({
    //         selectedDish: dish
    //     })             
    
    // }

    // renderDish(dish){
    //     if(dish!=null)
    //     {
    //         return(
    //             <div className="row">

    //             <DishDetail dishes={this.state.selectedDish} /> 
                
    //         </div> 
    //         )
    //     }
    //     else{
    //         return(
    //             <div>

    //             </div>
    //         )
    //     }
    // }



    render(){
        const menu=this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                     <Card 
                     onClick={() =>{this.props.onClick(dish.id)}}
                        //  () =>
                        //  this.onDishSelect(dish)
                     >
                         
                             <CardImg width="100%" object src={dish.image} alt={dish.name} />
                             
                         
                         <CardImgOverlay>
                             <CardTitle>{dish.name}</CardTitle>
                             
                         </CardImgOverlay>
                     </Card>
                     
                </div>
            )
        });
        console.log("render invoke")
        return(
            <div className="container">
                <div className="row">
                    
                        {menu}
                
                </div>
                {/* <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div> */}

            </div>
        )
    }
    
}
export default Menu