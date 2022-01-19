import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function CardsSlider() {
  return (
    <div style={{background:"grey", padding:"5%"}}>
        <Carousel indicators={false} >
            <Carousel.Item >
                <CardGroup style={{display:"flex", gap:"40px", justifyContent:"space-around"}}>
                    <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
                        <Card.Img src="./logo192.png" alt="Card image" style={{height:"300px", width:"300px"}} />
                        <img src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FVenom_(2018_film)&psig=AOvVaw3lcaMI_5q5HLtoIlHDDG2m&ust=1642701741576000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNCE9ICzvvUCFQAAAAAdAAAAABAD" alt = "venom">
                        </img> 
                    
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
                        <Card.Img src="./logo192.png" alt="Card image" style={{height:"300px", width:"300px"}}/>
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
                        <Card.Img src="./logo192.png" alt="Card image" style={{height:"300px", width:"300px"}}/>
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </CardGroup>
            </Carousel.Item>
            <Carousel.Item>
                <CardGroup style={{display:"flex", gap:"40px", justifyContent:"space-around"}}>
                    <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
                        <Card.Img src="./logo192.png" alt="Card image" style={{height:"300px", width:"300px"}}/>
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
                        <Card.Img src="./logo192.png" alt="Card image" style={{height:"300px", width:"300px"}}/>
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
                        <Card.Img src="./logo192.png" alt="Card image" style={{height:"300px", width:"300px"}}/>
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </CardGroup>
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default CardsSlider;
