import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import axios from "axios";
import {useState, useEffect} from 'react';

function AllMoviesFetch() {
    const [data, setData] = useState([]);

    useEffect(async () => {
        try {
            const response = await axios.get('https://book-my-show-backend-1.herokuapp.com/movies');
            console.log(response);
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
    }, []);

    return (
        <div>
            <Container fluid style={{padding:"5%", background:"red"}}>
            <div style={{background:"red", padding:"5%"}}>
            <div style={{display:"flex", gap:"10px", justifyContent:"space-around"}}>
            <div class = "wrapper text-white">
                <div>
                <Card.Img src="./rrr.png" alt="Card image" style={{height:"300px", width:"300px"}} />
                
                <div>
                <div>
                <div style={{background:"black"}}>
                <Card.Title>RRR</Card.Title>
                    Book a ticket now !
                </div>
                </div>
                </div>
            </div>

            </div>
            <div class = "wrapper text-white">
                <div>
                <Card.Img src="./akhanda.png" alt="Card image" style={{height:"300px", width:"300px"}} />
                
                <div>
                <div>
                <div style={{background:"black"}}>
                <Card.Title>Akhanda</Card.Title>
                    Book a ticket now !
                </div>
                </div>
                </div>
            </div>

            </div>
            
            <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
                        <Card.Img src="./liger.png" alt="Card image" style={{height:"300px", width:"300px"}}/>
                        <div>
                        <div style={{background:"black"}}>
                            <Card.Title>Liger</Card.Title>
                            Book a ticket now
                            </div>
                            </div>
                    </Card>
            </div>

            

            </div>

            


                    
                <Row style={{textAlign:"center"}}>
                    {data.map((mov) =>
                        <Col id={mov._id} key={mov.id} xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                            <Card style={{cursor:"pointer"}} onClick={()=> window.location.href="/movies/"+mov._id }>
                                <Card.Img variant="top" src={mov.imageurl} />
                                
            
                                </Card>
                    <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
                        <Card.Img src="./akhanda.png" alt="Card image" style={{height:"300px", width:"300px"}}/>
                         
                                 
                                <Card.Body>
                               
                
    
                                <Card.Title>{AllMoviesFetch.title}</Card.Title>
                                <Card.Text>{mov.actor}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    );
}

export default AllMoviesFetch;