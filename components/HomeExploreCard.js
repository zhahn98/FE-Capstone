/* eslint-disable object-curly-newline */
import Card from 'react-bootstrap/Card';
import Link from 'next/link';

export default function DisplayHomeExplore() {
  return (
    <Link passHref href="/park/parks">
      <Card border="light" style={{ width: '30rem', margin: '10px', padding: '5px', color: 'white', backgroundColor: '#597826', cursor: 'pointer' }}>
        <Card.Title>Explore</Card.Title>
        <Card.Text>Click here to view State Parks!</Card.Text>
        <Card.Img variant="bottom" src="https://nashvillelifestyles.com/downloads/45391/download/Screen%20Shot%202023-04-21%20at%2011.52.04%20AM.png?cb=a19370a753dcf8b4f00bd0615292c025" style={{ height: '400px' }} />
      </Card>
    </Link>
  );
}
