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
                        <Card.Img src="./rrr.png" alt="Card image" style={{height:"300px", width:"300px"}} />
            
                    
                        <Card.ImgOverlay>
                            <Card.Title>RRR</Card.Title>
                            <Card.Text>
                            
                            </Card.Text>
                            <Card.Text></Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
                        <Card.Img src="./cruella.png" alt="Card image" style={{height:"300px", width:"300px"}}/>
                        <Card.ImgOverlay>
                            <Card.Title>Cruella</Card.Title>
                            <Card.Text>
                            
                            </Card.Text>
                            <Card.Text></Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
                        <Card.Img src="./liger.png" alt="Card image" style={{height:"300px", width:"300px"}}/>
                        <Card.ImgOverlay>
                            <Card.Title>Liger</Card.Title>
                            <Card.Text>
                            
                            </Card.Text>
                            <Card.Text></Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </CardGroup>
            </Carousel.Item>
            <Carousel.Item>
                <CardGroup style={{display:"flex", gap:"40px", justifyContent:"space-around"}}>
                    <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
                        <Card.Img src="./akhanda.png" alt="Card image" style={{height:"300px", width:"300px"}}/>
                        <Card.ImgOverlay>
                            <Card.Title>Akhanda</Card.Title>
                            <Card.Text>
                            
                            </Card.Text>
                            <Card.Text></Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
                        <Card.Img src="./radhe.png" alt="Card image" style={{height:"300px", width:"300px"}}/>
                        <Card.ImgOverlay>
                            <Card.Title>Radhe Shyam</Card.Title>
                            <Card.Text>
                            
                            </Card.Text>
                            <Card.Text></Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
                        <Card.Img src="./jb.png" alt="Card image" style={{height:"300px", width:"300px"}}/>
                        <Card.ImgOverlay>
                            <Card.Title></Card.Title>
                            <Card.Text>
                            
                            </Card.Text>
                            <Card.Text></Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </CardGroup>
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default CardsSlider;
