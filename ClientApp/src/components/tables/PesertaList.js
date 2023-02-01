import React from 'react'

export default function PesertaList() {

    const peserta = [
        {'id':1,namaPeserta:'haikal',namaTest:'abdullah', status:'Selesai'},
        {'id':2,namaPeserta:'ziyad',namaTest:'muhammad', status:'Selesai'},
        {'id':3,namaPeserta:'shaka',namaTest:'abdurrahman', status:'Selesai'},
        {'id':4,namaPeserta:'desta',namaTest:'fadilah', status:'Selesai'}
      ];
  
      console.log('peserta length:::', peserta.length)
      if (peserta.length === 0) return null
  
      const PesertaRow = (user,index) => {
  
          return(
                <tr key = {index} className={index%2 === 0?'odd':'even'}>
                    <td>{index + 1}</td>
                    <td>{user.namaPeserta}</td>
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
