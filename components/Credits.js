/* eslint-disable object-curly-newline */
import Link from 'next/link';
import React from 'react';
import { Card } from 'react-bootstrap';

export default function DisplayCredits() {
  return (
    <div className="creds" style={{ marginTop: '250px' }}>
      <h5>Rooted Ratings is a Web Application using React JS, built as a Front End Capstone project by Zachary Hahn, September 2023</h5>
      <hr />
      <div
        className="text-center d-flex flex-row justify-content-center align-content-center"
        style={{ display: 'flex', flexDirection: 'row', gap: '150px' }}
      >
        <Card border="light" style={{ width: '18rem', margin: '10px', color: 'white', backgroundColor: '#4a6630', padding: '10px', cursor: 'pointer' }}>GitHub:
          <Link passHref href="https://github.com/zhahn98">
            <Card.Img variant="top" src="https://i.imgur.com/W4olMV9.png" style={{ height: '275px' }} />
          </Link>
        </Card>
        <Card border="light" style={{ width: '18rem', margin: '10px', color: 'white', backgroundColor: '#4a6630', padding: '10px', cursor: 'pointer' }}>Developer:
          <Link passHref href="https://www.instagram.com/zackhahn/">
            <Card.Img variant="top" src="https://i.imgur.com/cK94WKp.jpg" style={{ height: '275px' }} />
          </Link>
        </Card>
        <Card border="light" style={{ width: '18rem', margin: '10px', color: 'white', backgroundColor: '#4a6630', padding: '10px', cursor: 'pointer' }}>Linkedin:
          <Link passHref href="https://www.linkedin.com/in/zachary-hahn-4a0127255/">
            <Card.Img variant="top" src="https://i.imgur.com/x3JWspZ.png" style={{ height: '275px' }} />
          </Link>
        </Card>
      </div>
    </div>
  );
}
