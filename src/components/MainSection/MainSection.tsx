import { Button} from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function MainPage() {
    return (
        <>
        <h1 className="">Welcome to 808 Dev Rental</h1>
        <p>We are renting cars and bikes for short or long period of time.
            We have a wide range of cars and bikes to choose from.<br/>
            We are located in the center of Warsaw, Poland.<br/>
            We are open 24/7.<br/>
            We have the best prices in the city.
            We have the best customer service.<br/>
            And we are the best in what we do.
        </p>
        
            <Link className="" to="/vehicles">
                <Button variant="primary">
                Check out our vehicles
                </Button>
            </Link>
            
       

        </>
       
    );
}