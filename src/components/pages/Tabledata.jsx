import React from 'react'

function Tabledata({data, headers,handledelete}) {
  return (
    <> 
    <table>
              <thead>
                <tr id='headers'>
                  {headers.map( (h, index)=>{
                    return <td key={index}>{h}</td>
                  })}
                </tr>
              </thead>
              <tbody>
                {data.length> 0 && data?.map((dt, index) => (
                  <tr key={dt._id}>
                    <td>{index + 1}</td>
                    <td>{dt.language}</td>
                    <td style={{color:"red", cursor:'pointer'}}>
                      <button className='btn btn-danger'  onClick={() =>handledelete(dt._id)}><i className='bi bi-trash'></i></button></td>
                  </tr>
                ))}
              </tbody>
            </table></>
  )
}

export default Tabledata