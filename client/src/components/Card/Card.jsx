import React from 'react';
import './Card.scss';
import Card from 'react-bootstrap/Card';

export default function InfoCard({ information }) {
  return (
    <>
      {information?.map((text) => {
        return (
          <Card className="info-card">
            <Card.Img
              className="info-card__img"
              variant="top"
              src={text.image}
            />
            <Card.Body className="info-card__body">
              <Card.Title className="info-card__body--title">
                {text.title}
              </Card.Title>
              <Card.Text className="info-card__body--description">
                {text.description}
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}
