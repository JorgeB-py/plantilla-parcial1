import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap'
import { FormattedMessage } from 'react-intl';
import './login.css'

export default function Login(){
    const validar_contraseña=(e)=>{
        e.preventDefault();
        window.location.href = "/index";
    }

    return(
            <Col className='background'>
                <Row style={{display:'flex', alignContent:'center'}}>
                    <Container className='login-background'>
                        <h1>
                            <FormattedMessage id="app.login" defaultMessage="Login" />
                        </h1>
                        <form onSubmit={validar_contraseña}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">
                                    <FormattedMessage id="app.email" defaultMessage="Email" />
                                </label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    <small id="emailHelp" className="form-text text-muted"><FormattedMessage id="app.emailHelp" defaultMessage="We'll never share your email with anyone else." /></small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1"><FormattedMessage id="app.password" defaultMessage="Password" /></label>
                                <input type="password" className="form-control" id="exampleInputPassword1" minLength={8}/>
                            </div>
                            <button type="submit" className="btn btn-primary"><FormattedMessage id="app.submit" defaultMessage="Submit" /></button>
                        </form>
                    </Container>
                </Row>
            </Col>
    );
}