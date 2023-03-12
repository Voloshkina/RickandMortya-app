import '../assets/scss/style.scss';
import Card from './Card';

const CardsList = ({ results }) => {
  console.log(results);
  return (
    <section className='container-cards'>
      {results.map((elem) => (
        <Card
          key={elem.id}
          name={elem.name}
          image={elem.image}
          species={elem.species}
        />
      ))}
    </section>
  );
};

export default CardsList;
