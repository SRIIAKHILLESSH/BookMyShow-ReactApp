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
                        <Card.Img variant="top" src="./mechanic.png" />
                        <Card.Body>
                        <Card.Title>MECHANIC</Card.Title>
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
                        <Card.Img variant="top" src="./eternals.png" />
                        <Card.Body>
                        <Card.Title>Eternals</Card.Title>
                        <Card.Text>
                            
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="./venom.png" />
                        <Card.Body>
                        <Card.Title>Venom</Card.Title>
                        <Card.Text>
                            
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="./up.png" />
                        <Card.Body>
                        <Card.Title>Dont Look Up</Card.Title>
                        <Card.Text>
                            
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
