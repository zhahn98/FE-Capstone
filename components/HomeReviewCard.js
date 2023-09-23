import Card from 'react-bootstrap/Card';
import Link from 'next/link';

/* eslint-disable object-curly-newline */
export default function DisplayHomeReviews() {
  return (
    <Link passHref href="/review/reviews">
      <Card border="light" style={{ width: '30rem', margin: '10px', padding: '5px', color: 'white', backgroundColor: '#738f45', cursor: 'pointer' }}>
        <Card.Title>Reviews!</Card.Title>
        <Card.Text>Find out what others have to say!</Card.Text>
        <Card.Img variant="bottom" src="https://i.imgur.com/aviKn9G.png" style={{ height: '400px' }} />
      </Card>
    </Link>
  );
}
