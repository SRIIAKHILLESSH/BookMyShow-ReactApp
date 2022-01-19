import Carousel from "react-bootstrap/Carousel";

function SliderImages() {
  return (
    <div>
        <Carousel fade variant="dark">
            <Carousel.Item >
                <img
                className="d-block w-50"
                src="./pride.jpeg"
                alt="First slide"
                


                />
                <Carousel.Caption>
                <h3></h3>
                
                                 
                <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-50"
                src="./marvel.png"
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
                src="./radheshyam.png"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3></h3>
                <p></p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default SliderImages;
