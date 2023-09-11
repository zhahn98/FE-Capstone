import Link from 'next/link';
import { Button } from 'react-bootstrap';

export default function AddParkBtn() {
  return (
    <Link href="/park/new" passHref>
      <Button variant="success">Add a Park</Button>
    </Link>
  );
}
