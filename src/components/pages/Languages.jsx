import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import {Form, Container, Row, Col} from 'react-bootstrap';
import '../pagescss/language.css'
import axios from 'axios'
function Languages() {
  const [languageslist, setLanguageslist] = useState(["telugu", "english","hindhi","marathi", "tamil","kannada"])
  const [language, setLanguage] = useState("")
 
     async function savelanguage(){
    // const response = await axios.post(`https://localhost:2025/movieflix/language/:${language}`)
    console.log(language)
    setLanguage("")
    }
    function handledelete(){
      if(confirm("are you sure to delete long")){
        console.log("deleted..")
      }
      else{
        console.log("not deleted...")
      }
    }
  return (
    <div className='language-container'>
      <div className="language-header">
        <h2>Language Management</h2>
        <div className="hr" />
      </div>
      <hr />
      <Container className='contianer'>
        <Row>
          <Col lg={4} md={6} xs={12}>
            <div className="form">
               <Form>
                  <Form.Group className="mb-3">
                    <div className='language-subtitle'>
                      <h4>Add New Language</h4>
                    </div>
                    <Form.Label className='p-1' >
                          Language Name:
                      </Form.Label>
                    <Form.Control className='input' type="email" placeholder="Enter Language Name" value={language} onChange={e => setLanguage(e.target.value) }/>
                    <Button className='primary mt-3' onClick={savelanguage} >Save Language</Button>
                  </Form.Group>
               </Form>
            </div>
          </Col>

          <Col lg={8} md={6} xs={12}>
          <div className='language-table'>
                <h3>Language Lists ({languageslist.length})</h3>
                <hr />
            <table>
              <thead>
                <tr id='headers'>
                  <th>id</th>
                  <th>name</th>
                  <th>action</th>
                </tr>
              </thead>

              <tbody>
                {languageslist.map((lang, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{lang}</td>
                    <td style={{color:"red", cursor:'pointer'}} onClick={handledelete}>delete</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </Col>

        </Row>
      </Container>

            
    </div>
 
  )
}

export default Languages