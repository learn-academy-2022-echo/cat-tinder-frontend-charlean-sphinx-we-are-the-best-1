import React from 'react'
import { useParams } from "react-router-dom"
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap'
const CatShow = ({cats}) => {
 const { id } = useParams()
 const cat = cats.find((cat) => cat.id === +id)
console.log(id)
  return (
    <div className='CatShow'><Card className="my-2">
        <img
          alt="Card image cap"
          src={cat.image}
        />
        <CardBody>
          <CardTitle tag="h5">
            { cat.name }, { cat.age}
          </CardTitle>
          <CardText>
            {cat.location}
          </CardText>
          <CardText>
            {cat.anthem}
          </CardText>
          <CardText>
            {cat.movie}
          </CardText>
          <CardText>
            {cat.enjoys}
          </CardText>
          <CardText>
            {cat.joke}
          </CardText>
        </CardBody>
      </Card></div>
  )
}

export default CatShow