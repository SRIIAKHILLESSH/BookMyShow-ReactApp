import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Premieres() {
  return (
    <div style={{background:"rgb(43, 49, 72)", padding:"5%"}}>
        <h2 style={{color:"white"}}>Premieres</h2>
        <Carousel indicators={false} variant="dark">
            <Carousel.Item >
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src="./radhe.png" />
                        <Card.Body>
                        <Card.Title>RADHE SHYAM</Card.Title>
                        <Card.Text>
                           
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="./spiderman.png" />
                        <Card.Body>
                        <Card.Title>SPIDER MAN</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="./matrix.png" />
                        <Card.Body>
                        <Card.Title>MATRIX</Card.Title>
                        <Card.Text>
                            
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Carousel.Item>
            <Carousel.Item >
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src="./logo192.png" />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="./logo192.png" />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="./logo192.png" />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default Premieres;
