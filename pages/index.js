// import { Button } from 'react-bootstrap';
// import { signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';
import DisplayHomeExplore from '../components/HomeExploreCard';
import DisplayHomeReviews from '../components/HomeReviewCard';
import DisplayHomeFavorites from '../components/HomeFavoritesCard';

function Home() {
  const { user } = useAuth();

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: 'vh',
        padding: '30px',
        maxWidth: '2000px',
        margin: '0 auto',
        color: 'white',
      }}
    >
      <h2>Hello {user.displayName}! </h2>
      <h1>Welcome to Rooted Ratings!</h1>
      <br />
      <br />
      {/* <Button variant="danger" type="button" size="lg" className="copy-btn" onClick={signOut}>
        Sign Out
      </Button> */}
      <div
        className="text-center d-flex flex-row justify-content-center align-content-center"
        style={{ display: 'flex', flexDirection: 'row', gap: '150px' }}
      >
        <DisplayHomeReviews />
        <DisplayHomeExplore />
        <DisplayHomeFavorites />
      </div>
    </div>
  );
}

export default Home;
