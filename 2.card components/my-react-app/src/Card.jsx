import profilePic from './assets/cô uyên.jpg';

function Card() 
{
  return (
    <div className="card">
      <img
        src={profilePic}
        alt="Cô Uyên"
        style={{ width: 150, height: 150, objectFit: 'cover', borderRadius: 12 }}
        className="card-image"
      />
      <h2 className="card-title">I'm Thu Uyên</h2>
      <p className="card-text">I'm a teacher, I teach English for Students</p>
    </div>
  );
}

export default Card;