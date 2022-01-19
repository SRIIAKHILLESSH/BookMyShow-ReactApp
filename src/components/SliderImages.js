import Carousel from "react-bootstrap/Carousel";

function SliderImages() {
  return (
    <div>
        <Carousel fade variant="dark">
            <Carousel.Item >
                <img
                className="d-block w-50"
                src="./rrr1.png"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                
                                 
                <p>RRR</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-50"
                src="./venom.png"
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3></h3>
                <p></p>
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
