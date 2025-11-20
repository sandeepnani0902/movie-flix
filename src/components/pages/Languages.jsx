import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import {Form, Container, Row, Col, Table} from 'react-bootstrap';
import '../pagescss/language.css'
import axios from 'axios'
import Tabledata from './Tabledata';
function Languages() {
  const [languageslist, setLanguageslist] = useState([])
  const [language, setLanguage] = useState("")
 

  useEffect(()=>{
    setTimeout(() => {
      const getlanguages = async()=>{
      try{
         const res = await fetch("http://localhost:2025/movieflix/languages", 
        {method:"get"}
      )
      const data = await res.json()
      setLanguageslist(data)
      } 
      catch(err){
        console.error(err)
      } 
    }
    getlanguages()
    }, 100);
    
  },[languageslist])

     async function savelanguage(){
      try {
        
         const response = await axios.post(`http://localhost:2025/movieflix/language`, {language:language})
         setLanguage("")

      } catch (error) {
        console.log("error:",error)
      }
    }
    function handledelete(_id){
      if(confirm("are you sure to delete long")){
        fetch(`http://localhost:2025/movieflix/language/${_id}`, {
          method:"DELETE",
          headers: {
          "Content-Type": "application/json",
        }
        })
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
                    <Form.Control type="text" className='input' placeholder="Enter Language Name" value={language} onChange={e => setLanguage(e.target.value) }/>
                    <Button className='primary mt-3' onClick={savelanguage} >Save Language</Button>
                  </Form.Group>
               </Form>
            </div>
          </Col>

          <Col lg={8} md={6} xs={12}>
          <div className='language-table'>
                <h3>Language Lists ({languageslist.length})</h3>
                <hr />
            {/* <table>
              <thead>
                <tr id='headers'>
                  <th>id</th>
                  <th>name</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                {languageslist.map((lang, index) => (
                  <tr key={lang._id}>
                    <td>{index + 1}</td>
                    <td>{lang.language}</td>
                    <td style={{color:"red", cursor:'pointer'}} onClick={() =>handledelete(lang._id)}>delete</td>
                  </tr>
                ))}
              </tbody>
            </table> */}
            <Tabledata datatype={language} data={ languageslist } headers={["Id", "Name", "Action"]} handledelete={handledelete}/>
          </div>
          </Col>
        </Row>
      </Container>        
    </div>
 
  )
}

export default Languages