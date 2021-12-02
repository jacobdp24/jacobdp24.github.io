import React, { useEffect, useState, useContext} from "react";
import { Row, Col, Image, Modal} from "react-bootstrap";
import './modal.css'

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

const photos = importAll(require.context('./photos', false, /\.(png|jpe?g|svg)$/));

const PhotoRow = ({left, right}) => {
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(false);

    const handleCloseLeft = () => {
        setShowLeft(false);   
    }

    const handleCloseRight = () => {
        setShowRight(false);   
    }

    const handleShowLeft = () => {
        setShowLeft(true);
        setShowRight(false);
    }

    const handleShowRight = () => {
        setShowLeft(false);
        setShowRight(true);
    }

    return (
        <Row>
            <Col sm style={{width: "48%", height: "100%", float:'left', padding: "2px 1px 1px 2px"}}>
                <Image onClick={handleShowLeft} src={photos[left]} fluid={true} style={{maxWidth: "100%", height: "auto", objectFit: 'cover'}}/>
                <Modal
                    className="my-modal"
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={showLeft} 
                    onHide={handleCloseLeft}
                >
                    <Modal.Body>
                        <Image src={photos[left]} fluid={true} style={{maxWidth: "100%", height: "auto", objectFit: 'cover'}}/> 
                    </Modal.Body>
                </Modal>
            </Col>
            <Col sm style={{width: "48%", height: "100%", float:'right', padding: "2px 2px 1px 1px"}}>
                <Image onClick={handleShowRight} src={photos[right]} fluid={true} style={{maxWidth: "100%", height: "auto", objectFit: 'cover'}}/>
                <Modal
                    className="my-modal"
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={showRight} 
                    onHide={handleCloseRight}
                >
                    <Modal.Body>
                    <Image src={photos[right]} fluid={true} style={{maxWidth: "100%", height: "auto", objectFit: 'cover'}} />
                    </Modal.Body>
                </Modal>
            </Col>
        </Row>
    )
}

export default PhotoRow;