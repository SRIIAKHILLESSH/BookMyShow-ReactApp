import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import data from "./movies.json";

function AllMovies() {
    return (
        <div>
            <Container fluid style={{padding:"5%", background:"pink"}}>
                <Row style={{textAlign:"center"}}>
                    {data.map((mov) =>
                        <Col id={mov.id} key={mov.id} xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                            <Card style={{cursor:"pointer"}} onClick={()=> window.location.href="/movies/"+mov.id }>
                                <Card.Img variant="top" src={mov.image} />
                                 <img src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FVenom_(2018_film)&psig=AOvVaw3lcaMI_5q5HLtoIlHDDG2m&ust=1642701741576000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNCE9ICzvvUCFQAAAAAdAAAAABAD" alt = "venom">
                                     </img> 
                                 
                                <Card.Body>
                                <Card.Title>{mov.title}</Card.Title>
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

export default AllMovies;