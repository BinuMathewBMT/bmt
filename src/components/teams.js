import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AppTeams() {
  const companyHistory = [
    `BMT Consulting Services, LLC, is a professional construction estimating firm dedicated to bringing expertise to the forefront of the bidding process. Founded by Binu Mathew, a seasoned consultant with over 20 years of experience in diverse construction fields, our firm meets the growing demand for precise estimating services among sub-contractors who face challenges in pricing their trades for complex engineering and architectural projects.`,
    `BMT Consulting Services has expanded its client base to include architects, engineers, developers, general contractors, lawyers, and owners. Our robust business model allows us to provide precise estimates using actual sub-contractor numbers, ensuring reliable and competitive bids. Our second generation of family members has joined the firm, contributing to real estate transactions, acquisitions, and providing short-term financing for clients needing construction startup funds.`,
    `As we continue to grow and expand our services, we remain grateful to our clients who have trusted us with their estimating needs. Our commitment to accurate, on-time, and on-budget project initiation has made us a leader in the construction estimating field, and we look forward to continuing our successful journey with you.`
  ];

  return (
    <section id="teams" className="block teams-block">
      <Container fluid>
        <div className="title-holder">
          <h2 style={{color: 'white'}}>Our History - A Distinguished Legacy</h2>
        </div>
        <Row className="justify-content-md-center">
          <Col sm={8}>
              {companyHistory.map((paragraph, index) => (
                <p key={index} style={{ color: 'white', textAlign: 'justify' }}>{paragraph}</p>
              ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppTeams;