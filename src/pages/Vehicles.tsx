import { Button, Card } from "react-bootstrap";
// import Footer from "../components/Footer/Footer";

const Vehicles = () => {
  return (
    <>
      
      <div className="container text-center">
        <hr/>
        <h1>Check out our vehicles</h1>
        <hr />
        <h1>Our cars</h1>
        <div className="row align-items-start">
          <div className="col">
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src="src/assets/bmw32023.jpg" />
              <Card.Body>
                <Card.Title>BMW Series 3 320i 2023</Card.Title>
                <Card.Text>
                  1998 cm3 <br /> 184 KM <br /> Automatic transmission <br /> 4
                  doors <br /> RWD <br /> Left-hand drive
                </Card.Text>
                <h3>
                  <strong>300 $</strong> <br /> per day
                </h3>
                <Button variant="primary">Check availability</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src="src/assets/klasac.jpg" />
              <Card.Body>
                <Card.Title>Mercedes Klasa C 200 W206 2023</Card.Title>
                <Card.Text>
                  1498 cm3 <br /> 204 KM <br /> Automatic transmission <br /> 4
                  doors <br /> RWD <br /> Left-hand drive
                </Card.Text>
                <h3>
                  <strong>200 $</strong> <br /> per day
                </h3>
                <Button variant="primary">Check availability</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src="src/assets/giulia.jpg" />
              <Card.Body>
                <Card.Title>Alfa Romeo Giulia Quadrifoglio</Card.Title>
                <Card.Text>
                  2898 cm3 <br /> 510 KM <br /> Automatic transmission <br /> 4
                  doors <br /> RWD <br /> Left-hand drive
                </Card.Text>
                <h3>
                  <strong>800 $</strong> <br /> per day
                </h3>
                <Button variant="primary">Check availability</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
        <hr />
        <h1>Our motorcycles</h1>
        <div className="row align-items-start">
          <div className="col">
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src="src/assets/ducati.jpg" />
              <Card.Body>
                <Card.Title>Ducati Panigale V4</Card.Title>
                <Card.Text>
                  1103 cm3 <br /> 214 KM <br /> Manual transmission 
                </Card.Text>
                <h3>
                  <strong>200 $</strong> <br /> per day
                </h3>
                <Button variant="primary">Check availability</Button>
              </Card.Body>
            </Card>
            </div>
            <div className="col">
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src="src/assets/ktm.jpg" />
              <Card.Body>
                <Card.Title>KTM 1290 Super Duke R</Card.Title>
                <Card.Text>
                  1301 cm3 <br /> 180 KM <br /> Manual transmission 
                </Card.Text>
                <h3>
                  <strong>150 $</strong> <br /> per day
                </h3>
                <Button variant="primary">Check availability</Button>
              </Card.Body>
            </Card>
            </div>
            <div className="col">
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src="src/assets/harley.jpg" />
              <Card.Body>
                <Card.Title>Harley-Davidson Road King Classic</Card.Title>
                <Card.Text>
                  1745 cm3 <br /> 90 KM <br /> Manual transmission
                </Card.Text>
                <h3>
                  <strong>100 $</strong> <br /> per day
                </h3>
                <Button variant="primary">Check availability</Button>
              </Card.Body>

            </Card>
            </div>
            </div>
            
      </div>

     
    </>
  );
};
export default Vehicles;
