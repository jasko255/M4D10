import { Card, Button} from 'react-bootstrap'

const Song = () => {
    return ( 
        <Card className='col-md-4'>
        <Card.Img variant="top"  src={this.props.item.img}/>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
          {this.props.item.category} - {this.props.item.price} $
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
     );
}
 
export default Song;