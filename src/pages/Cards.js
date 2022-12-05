import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Cards = () => {
  return (
   <>
    <Card style={{ width: '20rem',border:'2px solid black',margin:'4px',boxShadow:'4px 4px 5px 5px darkblue' }}>
      <Card.Img   src={
              "https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Sri-Lord-Rama-Images-Hindu-Bhagwan-HD-Free-Download.jpg"
            } style={{width:'20rem'}} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
   </>
  )
}

export default Cards