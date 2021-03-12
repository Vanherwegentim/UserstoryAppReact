import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components'
import aku from '../assets/not_amused_aku.jpg'
import aku2 from '../assets/exhausted_aku.jpg'
import stalin from "../assets/stalin_anime.jpg"

const Wrapper = styled.div`
    padding: 40px 40px 40px 40px;
    width: 60%;
    margin-left:20%
    
    
`
class DemoCarousel extends Component {
    render() {
        return (
            <Wrapper >
            <Carousel>
                <div>
                    <img alt="pic1"  src={aku} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img alt="pic2" src={aku2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img alt="pic3" src={stalin} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            </Wrapper>
        );
    }
}

export default DemoCarousel
// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>