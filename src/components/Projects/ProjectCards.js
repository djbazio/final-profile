import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { DiGoogleDrive } from "react-icons/di";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" style={{maxWidth: "500px", maxHeight:"200px"}}src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title><b>{props.title}</b></Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.buttonType === 'Blog' && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp; Blog
          </Button>
        )}
        {props.buttonType === 'GitHub' && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp; GitHub
          </Button>
        )}
        {props.buttonType === 'GoogleDrive' && (
          <Button variant="primary" href={props.gDrive} target="_blank">
            <DiGoogleDrive /> &nbsp; Google Drive
          </Button>
        )}
        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}
        {props.pdfViewer && (
          <Button
            variant="primary"
            href={props.pdfViewer}
            target="_blank"
            style={{ marginLeft: "10px" }}>
              View PDF
            </Button>
            
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
