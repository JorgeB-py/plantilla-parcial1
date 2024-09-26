import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap'
import './login.css'

export default function Login(){
    const validar_contraseña=(e)=>{
        e.preventDefault();
        window.location.href = "/index";
    }

    return(
        <div className='background'>
            <Row>
                <Col>
                    <Container>
                        <h1>Log in</h1>
                        <form onSubmit={validar_contraseña}>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Correo</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Contraseña</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" minLength={8}/>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </Container>
                </Col>
            </Row>
        </div>
    );
}