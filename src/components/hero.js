import Carousel from 'react-bootstrap/Carousel';

var heroData = [
  {
    id: 1,
    image: require('../assets/images/img-hero1.jpg'),
    title: 'Comprehensive Cost Estimating',
    description: 'Our team excels in providing precise cost estimates throughout every stage of your project, from Program/Conceptual Design to Construction Documents. We meticulously assess all aspects and elements, ensuring a thorough and dependable cost plan that evolves with your design.'
  },
  {
    id: 2,
    image: require('../assets/images/img-hero2.jpg'),
    title: 'Value Engineering Expertise',
    description: 'We specialize in Value Engineering, systematically analyzing project functions to eliminate unnecessary costs while preserving functionality. Our approach evaluates alternative design, equipment, and material options to ensure optimal, life-cycle solutions for your project.'
  },
  {
    id: 3,
    image: require('../assets/images/img-hero3.jpg'),
    title: 'Bid Levelling and Reconciliation',
    description: 'Using OnCenter™, QuickBid™, and Microsoft Project™, we offer expert bid leveling and reconciliation services. We ensure accurate bid comparisons and clear insights for informed decisions, delivering high-value solutions for optimal project outcomes across various sectors.'
  }
]

function AppHero() {
  return (
    <section id="home" className="hero-block">
       <Carousel>
          {
            heroData.map(hero => {
              return (
                <Carousel.Item key={hero.id}>
                  <img
                      className="d-block w-100 carousel-image"
                      src={hero.image}
                      alt={"slide " + hero.id}
                  />
                  <div className="carousel-caption-container">
                    <Carousel.Caption>
                      <h2>{hero.title}</h2>
                      <p>{hero.description}</p>
                    </Carousel.Caption>
                  </div>             
                </Carousel.Item>
              );
            })
          }
      </Carousel>
    </section>
  );
}

export default AppHero;