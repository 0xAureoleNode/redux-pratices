import Card from 'react-bootstrap/Card';

const KitchenSinkExample = ({ name, description }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default KitchenSinkExample;
