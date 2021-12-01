import React from "react";
import { Row, Col, Image} from "react-bootstrap";

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

const photos = importAll(require.context('./photos', false, /\.(png|jpe?g|svg)$/));

const PhotoRow = ({left, right}) => {
    return (
        <Row>
            <Col sm style={{width: "48%", height: "100%", float:'left', padding: "2px 1px 1px 2px"}}>
                <Image src={photos[left]} fluid={true} style={{maxWidth: "100%", height: "auto", objectFit: 'cover'}}/>
            </Col>
            <Col sm style={{width: "48%", height: "100%", float:'right', padding: "2px 2px 1px 1px"}}>
                <Image src={photos[right]} fluid={true} style={{maxWidth: "100%", height: "auto", objectFit: 'cover'}} />
            </Col>
        </Row>
    )
}

export default PhotoRow;