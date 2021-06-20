import React from 'react'
import { Card } from 'react-bootstrap'
import '../css/card.css'


export const Cards = (props) => {
    return (
        <div>
            <Card  id="cardId" >
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.year}</Card.Subtitle>
                    <Card.Text>{props.school}</Card.Text>
                    <Card.Text>{props.city}</Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                </Card.Body>
            </Card>


        </div>
    )
}
