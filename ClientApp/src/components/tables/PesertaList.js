import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function PesertaList() {

    // array state peserta
    const [dataPeserta, setDataPeserta] = useState([]);

    useEffect(() => {
        axios.get("https://localhost:7211/api/Peserta").then((res) => {
            setDataPeserta((data) => {
                return res.data;
            })
        })
    },[]);
  
      console.log('peserta length:::', dataPeserta.length)
      if (dataPeserta.length === 0) return null
  
      const PesertaRow = (user,index) => {
  
          return(
                <tr key = {index} className={index%2 === 0?'odd':'even'}>
                    <td>{index + 1}</td>
                    <td>{user.namaDepan}</td>
                    <td>{user.namaBelakang}</td>
                    <td>
                        <button onClick={() => deletePeserta(user.id)} className="btn btn-primary">Delete</button>
                        <button onClick={() => editPeserta(user.id)} className="btn btn-info">Edit</button>
                    </td>
                </tr>
            )
      }
  
      const pesertaTable = dataPeserta.map((user,index) => PesertaRow(user,index))
  
      return(
          <div className="container">
              <h2>Daftar Peserta</h2>
              <br />
              <table className="table table-bordered">
                  <thead>
                  <tr>
                      <th>Id</th>
                      <th>Nama Depan</th>
                      <th>Nama Belakang</th>
                      <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                      {pesertaTable}
                  </tbody>
              </table>
          </div>
      )
}
