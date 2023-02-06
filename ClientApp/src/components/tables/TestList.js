import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function TestList() {

    const [dataTest, setDataTest] = useState([]);

    useEffect(() => {
        axios.get("https://localhost:7211/api/Test").then((res) => {
            setDataTest((data) => {
                return res.data;
            })
        })
    },[])

      console.log('test length:::', dataTest.length)
      if (dataTest.length === 0) return null
  
      const TestRow = (user,index) => {
  
          return(
                <tr key = {index} className={index%2 === 0?'odd':'even'}>
                    <td>{index + 1}</td>
                    <td>{user.namaTest}</td>
                    <td>
                        <button className="btn btn-primary">Delete</button>
                        <button className="btn btn-info">Edit</button>
                    </td>
                </tr>
            )
      }
  
      const testTabel = dataTest.map((user,index) => TestRow(user,index))
  
      return(
          <div className="container">
              <h2>Daftar Peserta</h2>
              <br />
              <table className="table table-bordered">
                  <thead>
                  <tr>
                      <th>Id</th>
                      <th>Nama Test</th>
                      <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                      {testTabel}
                  </tbody>
              </table>
          </div>
      )
}
