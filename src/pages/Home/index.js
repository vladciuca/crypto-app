import React from "react";
import axios from "axios";
import styled from "styled-components"

const Img = styled.img`
height: 2.5rem;
width: 2.5rem;
`

class Home extends React.Component{
    state={

    }
    render(){
        return(<div>
            {this.props.list.map((item)=>
            <div key={item.id}>
                <Img src={item.image} alt=""/>
                <span>{(item.symbol).toUpperCase()}</span>
                -{item.name}
            </div>
            )} 
        </div>)
    }
}

export default Home