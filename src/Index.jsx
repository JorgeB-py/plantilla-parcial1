import { Row, Col, Container } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css'

export default function Index(){
    const [info, setInfo] = useState({});

    const generarCarta = (url)=>{
        let posts=[]
        for (let i = 0; i < 10; i++) {
            posts.push(
                <Col>
                    <div className="card" style={{width:"18rem"}}>
                        <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <img className="card-img-top img-post" src={url} alt="post"/>
                        </button>
                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    ...
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            );
        }
        return posts
    }

    useEffect(() => {
        fetch("https://my.api.mockaroo.com/parcial.json?key=b93c22a0").then((response) => {response.json().then((data)=>{setInfo(data[0]);
        })});
    }, []);
    return(
        <Row>
                <Col>
                    <h1>Cycling</h1>
                    <Row>
                        {generarCarta("https://img.redbull.com/images/c_crop,x_940,y_0,h_3264,w_2611/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2018/11/27/325118c5-1118-4dfb-82b5-4e5958acaa40/red-bull-zera-o-pico-2018-guaratinga-brasil")}
                    </Row>
                </Col>
                <Col>
                    <h1>Running</h1>
                    <Row>
                        
                        {generarCarta("https://media.gq.com.mx/photos/61607523fb5b39d60109f837/1:1/w_1996,h_1996,c_limit/GettyImages-675020531-correr-para-sentirte-bien.jpg")}
                    </Row>
                    
                </Col>
                <Col>
                    <h1>Swimming</h1>
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
                        <i class="bi bi-bicycle"></i>
                        <h3>{info.mejor_cicla} mins</h3>
                    </Col>
                    <Col>
                        <i class="bi bi-person-arms-up"></i>
                        <h3>{info.mejor_nadando} mins</h3>
                    </Col>
                    <Col>
                        <i className="bi bi-person-walking"></i>
                        <h3>{info.mejor_corriendo} mins</h3>
                    </Col>
                </Row>
            </Container>
        </Row>
    )
}