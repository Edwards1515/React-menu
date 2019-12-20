import React, { Component } from 'react';

class TarjetaDeDocente extends Component {


        render() {
            return (
    

                <div className="container">
                                    <div className="col-md-9">
                                    <div className="blog_post">
                                        <img src="img/cat-post-1.jpg" alt=""></img>
                                        <div className="blog_details">
                                            <h2>{this.props.restaurante.nombre}</h2>
                                            <p>{this.props.restaurante.carta}</p>
                                             
                                        </div>
                                        <p>------------------------</p>
                                        <br></br>
                                    </div>
                                </div>
    
                    
                </div>
    
            );
    
        }
      
   
}


export default TarjetaDeDocente;
