import { Row, Col, Container, Modal, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { FormattedMessage } from 'react-intl';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css'

export default function Index(){
    const [info, setInfo] = useState({});
    const [selectedImage, setSelectedImage] = useState("");
    const [showModal, setShowModal] = useState(false);   

    const handleShow = (url) => {
        setSelectedImage(url);
        setShowModal(true);
    }

    const handleClose = () => setShowModal(false);

    const generarCarta = (url)=>{
        let posts = [];
        for (let i = 0; i < 10; i++) {
            posts.push(
                <Col key={i} style={{display:'flex', justifyContent:'center', padding:'1rem'}}>
                    <div className="card" style={{width:"18rem"}}>
                        <button type="button" className="boton-img" onClick={() => handleShow(url)}>
                            <img className="card-img-top img-post" src={url} alt="post"/>
                        </button>
                    </div>
                </Col>
            );
        }
        return posts;
    }

    useEffect(() => {
        fetch("https://my.api.mockaroo.com/parcial.json?key=b93c22a0")
        .then((response) => response.json())
        .then((data) => setInfo(data[0]));
    }, []);

    return(
        <>
            <Row>
                    <Col>
                        <Row>
                            <h1 style={{display:'flex', justifyContent:'center'}}><FormattedMessage id="app.Cycling" defaultMessage="Cycling" /></h1>
                            {generarCarta("https://img.redbull.com/images/c_crop,x_940,y_0,h_3264,w_2611/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2018/11/27/325118c5-1118-4dfb-82b5-4e5958acaa40/red-bull-zera-o-pico-2018-guaratinga-brasil")}
                        </Row>
                    </Col>
                    <Col>
                        <h1 style={{display:'flex', justifyContent:'center'}}><FormattedMessage id="app.Running" defaultMessage="Running" /></h1>
                        <Row>
                            {generarCarta("https://media.gq.com.mx/photos/61607523fb5b39d60109f837/1:1/w_1996,h_1996,c_limit/GettyImages-675020531-correr-para-sentirte-bien.jpg")}
                        </Row>
                    </Col>
                    <Col>
                        <h1 style={{display:'flex', justifyContent:'center'}}><FormattedMessage id="app.Swimming" defaultMessage="Swimming" /></h1>
                        <Row>
                            {generarCarta("https://img.europapress.es/fotoweb/fotonoticia_20150807140313_690.jpg")}
                        </Row>
                    </Col>

                <Container>
                    <Row className="perfil" style={{backgroundColor:"#003d9eb7"}}>
                        <Col>
                            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" alt="perfil" />
                        </Col>
                        <Col>
                            <h2>{info.nombre_completo}</h2>
                        </Col>
                        <Col>
                            <i className="bi bi-person-walking"></i>
                            <h3>{info.mejor_corriendo} mins</h3>
                        </Col>
                        <Col>
                            <i className="bi bi-water"></i>
                            <h3>{info.mejor_nadando} mins</h3>
                        </Col>
                        <Col>
                            <i className="bi bi-bicycle"></i>
                            <h3>{info.mejor_cicla} mins</h3>
                        </Col>
                    </Row>
                </Container>
            </Row>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Imagen Ampliada</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={selectedImage} alt="Ampliada" style={{ width: "100%" }} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
