import Link from 'next/link';
import { Button } from 'react-bootstrap';

export default function AddParkBtn() {
  const buttonStyle = {
    marginBottom: '10px',
  };

  return (
    <Link href="/park/new" passHref>
      <Button variant="success" style={buttonStyle}>Add a Park</Button>
    </Link>
  );
}
