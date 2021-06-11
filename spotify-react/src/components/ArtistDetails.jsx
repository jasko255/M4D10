// https://striveschool-api.herokuapp.com/api/deezer/artist/{id}
import { useState, useEffect } from "react"
import ArtistPage from './ArtistPage'

const ArtistDetails = ({match}) => {

    const [info, setInfo] = useState(null)

    useEffect(()=>{

        const getArtistId = async () =>{

            let id = match.params.artistId
            if(id){
            let response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/' + id)
            let artistId = await response.json()
            console.log(artistId);
            setInfo(artistId)    
            }    
        }
        getArtistId()
        

    },[match.params.artistId])

    

    return (  
        <div>
            {
                <ArtistPage obj={info} />
                
            }
        </div>
    );
}
 
export default ArtistDetails;