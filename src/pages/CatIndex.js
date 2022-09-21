import React from 'react'
import { Card, CardBody, CardTitle, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'


const CatIndex = ({ cats }) => {
  
  return (
   <main>
      {cats.map((cat, index) => {
        return (
<div className='cat-index-cards'>
          <Card
            style={{
              width: '18rem'
            }}
            key={index}
          >
            <img
              alt="Sample"
              src={cat.image}
            />
            <CardBody>
              <CardTitle tag="h5">
                {cat.name}
              </CardTitle>
              <NavLink to={`/catshow/${cat.id}`} className="nav-link">
                <Button>
                  See more details
                </Button>
              </NavLink>
            </CardBody>
          </Card>



</div>
        )
      })}
    </main>
  )
}

export default CatIndex