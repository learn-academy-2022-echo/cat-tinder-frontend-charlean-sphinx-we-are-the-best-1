import React from 'react'
import { useParams } from "react-router-dom"



// so my goal here is to pretty much combine new and show.
//  so i want the form from new, but i also want the from filled in with the info from show
// and then i want to submit it as an update/edit but not change the primary key id




const CatEdit = ({updateCat}) => {
  const { id } = useParams()
  const cat = cats.find((cat) => cat.id === +id)

  const handleCats = (e) => {
    setUpdateCat({...updateCat, [e.target.name]: e.target.value})
    console.log(updateCat)
  }

  const handleSubmit = () => {
    updateCat(updateCat)
    navigate("/catindex")
  }
  return (

    <>
        <h2> Add a Mummy </h2>
        <Form>
          <FormGroup>
            <Label for="name">Mummy's Name</Label>
            <Input
              name="name"
              placeholder = "src={cat.image}"
              type="text"
              onChange={handleCats}
              value={newCat.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="age">Age</Label>
            <Input
              name="age"
              placeholder="AGE...d like a fine wine, heck yes you did. Lets count them crows feet like tree rings. How old are? "
              type="number"
              onChange={handleCats}
              value={newCat.age}
            />
          </FormGroup>
          <FormGroup>
            <Label for="location">Tomb Location</Label>
            <Input
              name="location"
              placeholder="Museuem of Natural History? Secret pyramid burried under sand?"
              type="text"
              onChange={handleCats}
              value={newCat.location}
            />
          </FormGroup>
          <FormGroup>
            <Label for="anthem">Anthem</Label>
            <Input
              name="anthem"
              placeholder="Its in every playlist, you know every word. What song is your anthem?"
              type="text"
              onChange={handleCats}
              value={newCat.anthem}
            />
          </FormGroup>
          <FormGroup>
            <Label for="movie">Favorite Movie</Label>
            <Input
              name="movie"
              placeholder="You wanna Netflix and Chill dont you? If nothing else in your profile turned them on, this will for sure... Whats your favorite film?"
              type="text"
              onChange={handleCats}
              value={newCat.movie}
            />
          </FormGroup>
          <FormGroup>
            <Label for="enjoys">Hobbies</Label>
            <Input
              name="enjoys"
              placeholder="Board games? Ping-Pong? Draw pictures on the wall with your sevants blood? What hobbies do you have?"
              type="text"
              onChange={handleCats}
              value={newCat.enjoys}
            />
          </FormGroup>
          <FormGroup>
            <Label for="joke">Favorite Joke</Label>
            <Input
              name="joke"
              placeholder="Nothing is funnier than you sex life, but its worth a shot. Whats your best joke?"
              type="text"
              onChange={handleCats}
              value={newCat.joke}
            />
          </FormGroup>
          <FormGroup>
            <Label for="image">Mummy Profile</Label>
            <Input
              name="image"
              placeholder="Whoops stole your soul. haha just kidding, upload a photo, try to not have glasses on, and smile, lets see them pearly whites."
              type="url"
              onChange={handleCats}
              value={newCat.image}
            />
          </FormGroup>
          <Button
            onClick={handleSubmit}
            name="submit"
          >
            Submit
          </Button>
        </Form>
      </>
  )
}

export default CatEdit