/* eslint-disable object-curly-newline */
import Card from 'react-bootstrap/Card';
import Link from 'next/link';

export default function DisplayHomeProfile() {
  return (
    <Link passHref href="/park/parks">
      <Card border="light" style={{ width: '30rem', margin: '10px', padding: '5px', color: 'white', backgroundColor: '#2c4207', cursor: 'pointer' }}>
        <Card.Title>User Profile</Card.Title>
        <Card.Text>Share your experiences!</Card.Text>
        <Card.Img variant="bottom" src="https://i.imgur.com/dzQRfgj.png" style={{ height: '400px' }} />
      </Card>
    </Link>
  );
}
