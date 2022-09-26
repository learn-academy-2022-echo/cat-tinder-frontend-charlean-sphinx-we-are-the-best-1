import React from 'react'
import { useParams, NavLink } from "react-router-dom"
import { Card, CardBody, CardText, CardTitle, Button } from 'reactstrap'

const CatShow = ({cats}) => {
 const { id } = useParams()
 const cat = cats.find((cat) => cat.id === +id)
console.log(id)
  return (
    <div className='CatShow'><Card className="catimg">
        <img
          alt="Card cap"
          src={cat.image}
        />
        <CardBody>
          <CardTitle tag="h5">
            { cat.name }, { cat.age}
          </CardTitle>
          <CardText>
            
            <p>Location: {cat.location}</p>
          </CardText>
          <CardText>
            <p>Anthem: {cat.anthem}</p>
          </CardText>
          <CardText>
            <p>Favorite Movie: {cat.movie}</p>
          </CardText>
          <CardText>
            <p>About: {cat.enjoys}</p>
          </CardText>
          <CardText>
            <p>Joke: {cat.joke}</p>
          </CardText>
            <NavLink to={`/catedit/${cat.id}`} className="nav-link">
            <Button>
            Edit Profile
            </Button>
            </NavLink>
        </CardBody>
      </Card>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      </div>
  )
}

export default CatShow