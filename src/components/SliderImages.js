import Carousel from "react-bootstrap/Carousel";

function SliderImages() {
  return (
    <div>
        <Carousel fade variant="dark">
            <Carousel.Item >
                <img
                className="d-block w-50"
                src="./logo192.png"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <img src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FVenom_(2018_film)&psig=AOvVaw3lcaMI_5q5HLtoIlHDDG2m&ust=1642701741576000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNCE9ICzvvUCFQAAAAAdAAAAABAD" alt = "venom">
                                     </img> 
                                 
                <p>VENOM</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-50"
                src="./logo192.png"
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-50"
                src="./logo192.png"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default SliderImages;
