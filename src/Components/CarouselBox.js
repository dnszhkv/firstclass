import { Component } from "react"
import Carousel from 'react-bootstrap/Carousel'
import wavesImg from '../assets/waves.jpg'
import coastImg from '../assets/coast.jpg'
import shoreImg from '../assets/shore.jpg'

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={wavesImg}
                        alt='Waves'
                    />
                    <Carousel.Caption>
                        <h3>Waves image</h3>
                        <p>Lorem ipsum</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={coastImg}
                        alt='Coast'
                    />
                    <Carousel.Caption>
                        <h3>Coast image</h3>
                        <p>Lorem ipsum</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={shoreImg}
                        alt='Shore'
                    />
                    <Carousel.Caption>
                        <h3>Shore image</h3>
                        <p>Lorem ipsum</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
