import React from 'react'

export default function TestList() {

    const peserta = [
        {'id':1,namaTest:'Algoritma'},
        {'id':2,namaTest:'Psikotest'},
        {'id':3,namaTest:'Koding'},
        {'id':4,namaTest:'Tingkah'}
      ];
  
      console.log('peserta length:::', peserta.length)
      if (peserta.length === 0) return null
  
      const PesertaRow = (user,index) => {
  
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
  
      const pesertaTable = peserta.map((user,index) => PesertaRow(user,index))
  
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
                      {pesertaTable}
                  </tbody>
              </table>
          </div>
      )
}
