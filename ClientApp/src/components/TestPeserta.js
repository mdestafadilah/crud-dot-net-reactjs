import React from 'react'

export const TestPeserta = () => {

    const peserta = [
      {'id':1,namaPeserta:'haikal',namaTest:'Algoritma', status:'Selesai'},
      {'id':1,namaPeserta:'ziyad',namaTest:'Algoritma', status:'Selesai'},
      {'id':1,namaPeserta:'shaka',namaTest:'Algoritma', status:'Selesai'},
      {'id':1,namaPeserta:'shaka',namaTest:'Algoritma', status:'Selesai'}
    ];

    console.log('peserta length:::', peserta.length)
    if (peserta.length === 0) return null

    const PesertaRow = (user,index) => {

        return(
              <tr key = {index} className={index%2 === 0?'odd':'even'}>
                  <td>{index + 1}</td>
                  <td>{user.namaPeserta}</td>
                  <td>{user.namaTest}</td>
                  <td>{user.status}</td>
              </tr>
          )
    }

    const pesertaTable = peserta.map((user,index) => PesertaRow(user,index))

    return(
        <div className="container">
            <h2>Daftar Peserta Test</h2>
            <br />
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Nama Peserta</th>
                    <th>Nama Test</th>
                    <th>Status</th>
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