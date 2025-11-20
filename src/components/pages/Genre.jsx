import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, CardText } from 'react-bootstrap'
import Tabledata from './Tabledata'
import '../pagescss/genre.css'
function Genre() {
  const [genrelist, setGenreList] =useState([
    
  ])
  const [genre, setGenre] = useState("")
  const [category, setCategory] = useState("")
  const headers = ["Id","Genre", "Category","Action"]
  function saveGenre(){
    setGenreList([{
      genre:genre,
      category:category
    }])
  }
  function handledelete(){

  }
  return (
    <div className='genre-container'>
       <div className="genre-header">
        <h2>Language Management</h2>
      </div>
      <hr />
            <Container className='contianer'>
        <Row>
          <Col lg={4} md={6} xs={12}>
            <div className="form">
               <Form>
                  <Form.Group className="mb-3">
                    <div className='genre-subtitle'>
                      <h4>Add New Language</h4>
                    </div>
                    <Form.Label className='p-1' >
                          Genre Name:
                      </Form.Label>
                    <Form.Control type="text" className='input' placeholder="Enter Genre Name" value={genre} onChange={e => setGenre(e.target.value) }/>
                     <Form.Label className='p-1' >
                          Category:
                      </Form.Label>
                      <Form.Select size="sm" aria-label="Default select example" value={category} onChange={ e => setCategory(e.target.value)}>
                        <option value="" disabled>-- Select Category --</option>
                        <option value="Movie" >Movie</option>
                        <option value="Web Series">Web Series</option>
                      </Form.Select>
                    <Button className='primary mt-3' onClick={saveGenre} >Save Genre</Button>
                  </Form.Group>
               </Form>
            </div>
          </Col>

          <Col lg={8} md={6} xs={12}>
          <div className='language-table'>
                <h3>Language Lists ({genrelist.length})</h3>
                <hr />
            <table>
              <thead>
                <tr id='headers'>
                  {headers.map( (h, index)=>{
                    return <td key={index}>{h}</td>
                  })}
                </tr>
              </thead>
              <tbody>
                {genrelist?.map( (g, index) => (
                  <tr key={g._id}>
                    <td>{index + 1}</td>
                    <td>{g.genre}</td>
                     <td>{g.category}</td>
                    <td style={{color:"red", cursor:'pointer'}} onClick={() =>handledelete(g._id)}>delete</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* <Tabledata datatype={"genre"} data={ genrelist } headers={["Id", "Name", "Action"]} handledelete={handledelete}/> */}
          </div>
          </Col>
        </Row>
      </Container>  
    </div>
  )
}

export default Genre