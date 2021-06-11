import {Container, Card, Button, Row } from 'react-bootstrap'
import { useState, useEffect} from 'react'




const Main = (props) => {

   const[music, setMusic] = useState([])

   useEffect(()=>{
    const getMusic =async () =>{
        let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=queen`)
        let musicQuery = await response.json()
        console.log('what is it',musicQuery);
        setMusic(musicQuery.data)

    }

    getMusic()
   },[])


    return ( 
        <Container id='body'>

        <Row>

        {
            music.map(song => 
                <Card className='col-md-3 text-white my-2 bg-dark' key={song.id}>
        <Card.Img variant="top"  src={song.album.cover_medium} alt={song.album.id} onClick={()=> props.history.push('/artist/' + song.artist.id)}  />
        <Card.Body>
          <Card.Title>{song.album.title}</Card.Title>
          <Card.Text>
           - {song.artist.name} 
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
                )
        }

        </Row>
        </Container>

     )
}
 
export default Main;