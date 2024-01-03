import React, {useState} from 'react'
import Pagination from '../Pagination/Pagination'

const TableInfo = () => {

  const [dptoSelect, setdptoSelect] = useState('');
  const [citySelect, setcitySelect] = useState('');
  const [factorSelect, setfactorSelect] = useState('');
  const [subFactorSelect, setsubFactorSelect] = useState('');

  const handlePrimerSelectChange = (e) => {
    const valorSeleccionado = e.target.value;
    setdptoSelect(valorSeleccionado);
  };

  const handleSegundoSelectChange = (e) => {
    const valorSeleccionado = e.target.value;
    setcitySelect(valorSeleccionado);
  };

  const handleTercerSelectChange = (e) => {
    const valorSeleccionado = e.target.value;
    setfactorSelect(valorSeleccionado);
  };

  const handleCuartoSelectChange = (e) => {
    const valorSeleccionado = e.target.value;
    setsubFactorSelect(valorSeleccionado);
  };


  return (
    <div className='w-full h-full p-20'>
      <h2 className="text-5xl font-bold mb-9 flex items-center gap-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
        </svg>
        Base de datos general
      </h2>
      <div className="fiters flex gap-4 mb-5">
        <select className="select select-bordered select-sm w-full max-w-xs" value={dptoSelect} onChange={handlePrimerSelectChange} defaultValue='INIT'>
          <option value='INIT' disabled>Departamento</option>
          <option value='SANTANDER'>SANTANDER</option>
          <option value='ANTIOQUIA'>ANTIOQUIA</option>
        </select>
        <select className="select select-bordered select-sm w-full max-w-xs" value={citySelect} onChange={handleSegundoSelectChange} disabled={dptoSelect === ''}>
          <option disabled >Ciudad o municipio</option>
          <option>Medellin</option>
          <option>Bucaramanga</option>
          <option>Ibague</option>
        </select>
        <select className="select select-bordered select-sm w-full max-w-xs" value={factorSelect} onChange={handleTercerSelectChange} disabled={citySelect === ''}>
          <option disabled selected>Factor</option>
          <option>Economico</option>
          <option>Social</option>
          <option>Armado</option>
        </select>
        <select className="select select-bordered select-sm w-full max-w-xs" value={subFactorSelect} onChange={handleCuartoSelectChange} disabled={factorSelect === ''}>
          <option disabled selected>Sub-factor</option>
          <option>Small Apple</option>
          <option>Small Orange</option>
          <option>Small Tomato</option>
        </select>
        
        <input type="text" placeholder="Buscar..." class="input input-bordered input-sm w-full max-w-xs" />
      </div>
      <div className="overflow-x-auto">
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th></th> 
              <td>Name</td> 
              <td>Job</td> 
              <td>company</td> 
              <td>location</td> 
              <td>Last Login</td> 
              <td>Favorite Color</td>
              <th></th> 
            </tr>
          </thead> 
          <tbody>
            <tr>
              <th>1</th> 
              <td>Cy Ganderton</td> 
              <td>Quality Control Specialist</td> 
              <td>Littel, Schaden and Vandervort</td> 
              <td>Canada</td> 
              <td>12/16/2020</td> 
              <td>Blue</td>
              <th>1</th> 
            </tr>
            <tr>
              <th>2</th> 
              <td>Hart Hagerty</td> 
              <td>Desktop Support Technician</td> 
              <td>Zemlak, Daniel and Leannon</td> 
              <td>United States</td> 
              <td>12/5/2020</td> 
              <td>Purple</td>
              <th>2</th> 
            </tr>
            <tr>
              <th>3</th> 
              <td>Brice Swyre</td> 
              <td>Tax Accountant</td> 
              <td>Carroll Group</td> 
              <td>China</td> 
              <td>8/15/2020</td> 
              <td>Red</td>
              <th>3</th> 
            </tr>
            <tr>
              <th>4</th> 
              <td>Marjy Ferencz</td> 
              <td>Office Assistant I</td> 
              <td>Rowe-Schoen</td> 
              <td>Russia</td> 
              <td>3/25/2021</td> 
              <td>Crimson</td>
              <th>4</th> 
            </tr>
            <tr>
              <th>5</th> 
              <td>Yancy Tear</td> 
              <td>Community Outreach Specialist</td> 
              <td>Wyman-Ledner</td> 
              <td>Brazil</td> 
              <td>5/22/2020</td> 
              <td>Indigo</td>
              <th>5</th> 
            </tr>
            <tr>
              <th>6</th> 
              <td>Irma Vasilik</td> 
              <td>Editor</td> 
              <td>Wiza, Bins and Emard</td> 
              <td>Venezuela</td> 
              <td>12/8/2020</td> 
              <td>Purple</td>
              <th>6</th> 
            </tr>
            <tr>
              <th>7</th> 
              <td>Meghann Durtnal</td> 
              <td>Staff Accountant IV</td> 
              <td>Schuster-Schimmel</td> 
              <td>Philippines</td> 
              <td>2/17/2021</td> 
              <td>Yellow</td>
              <th>7</th> 
            </tr>
            <tr>
              <th>8</th> 
              <td>Sammy Seston</td> 
              <td>Accountant I</td> 
              <td>O'Hara, Welch and Keebler</td> 
              <td>Indonesia</td> 
              <td>5/23/2020</td> 
              <td>Crimson</td>
              <th>8</th> 
            </tr>
            <tr>
              <th>9</th> 
              <td>Lesya Tinham</td> 
              <td>Safety Technician IV</td> 
              <td>Turner-Kuhlman</td> 
              <td>Philippines</td> 
              <td>2/21/2021</td> 
              <td>Maroon</td>
              <th>9</th> 
            </tr>
            <tr>
              <th>10</th> 
              <td>Zaneta Tewkesbury</td> 
              <td>VP Marketing</td> 
              <td>Sauer LLC</td> 
              <td>Chad</td> 
              <td>6/23/2020</td> 
              <td>Green</td>
              <th>10</th> 
            </tr>
            <tr>
              <th>11</th> 
              <td>Andy Tipple</td> 
              <td>Librarian</td> 
              <td>Hilpert Group</td> 
              <td>Poland</td> 
              <td>7/9/2020</td> 
              <td>Indigo</td>
              <th>11</th> 
            </tr>
            <tr>
              <th>12</th> 
              <td>Sophi Biles</td> 
              <td>Recruiting Manager</td> 
              <td>Gutmann Inc</td> 
              <td>Indonesia</td> 
              <td>2/12/2021</td> 
              <td>Maroon</td>
              <th>12</th> 
            </tr>
            <tr>
              <th>13</th> 
              <td>Florida Garces</td> 
              <td>Web Developer IV</td> 
              <td>Gaylord, Pacocha and Baumbach</td> 
              <td>Poland</td> 
              <td>5/31/2020</td> 
              <td>Purple</td>
              <th>13</th> 
            </tr>
            <tr>
              <th>14</th> 
              <td>Maribeth Popping</td> 
              <td>Analyst Programmer</td> 
              <td>Deckow-Pouros</td> 
              <td>Portugal</td> 
              <td>4/27/2021</td> 
              <td>Aquamarine</td>
              <th>14</th> 
            </tr>
            <tr>
              <th>15</th> 
              <td>Moritz Dryburgh</td> 
              <td>Dental Hygienist</td> 
              <td>Schiller, Cole and Hackett</td> 
              <td>Sri Lanka</td> 
              <td>8/8/2020</td> 
              <td>Crimson</td>
              <th>15</th> 
            </tr>
            <tr>
              <th>16</th> 
              <td>Reid Semiras</td> 
              <td>Teacher</td> 
              <td>Sporer, Sipes and Rogahn</td> 
              <td>Poland</td> 
              <td>7/30/2020</td> 
              <td>Green</td>
              <th>16</th> 
            </tr>
            <tr>
              <th>17</th> 
              <td>Alec Lethby</td> 
              <td>Teacher</td> 
              <td>Reichel, Glover and Hamill</td> 
              <td>China</td> 
              <td>2/28/2021</td> 
              <td>Khaki</td>
              <th>17</th> 
            </tr>
            <tr>
              <th>18</th> 
              <td>Aland Wilber</td> 
              <td>Quality Control Specialist</td> 
              <td>Kshlerin, Rogahn and Swaniawski</td> 
              <td>Czech Republic</td> 
              <td>9/29/2020</td> 
              <td>Purple</td>
              <th>18</th> 
            </tr>
            <tr>
              <th>19</th> 
              <td>Teddie Duerden</td> 
              <td>Staff Accountant III</td> 
              <td>Pouros, Ullrich and Windler</td> 
              <td>France</td> 
              <td>10/27/2020</td> 
              <td>Aquamarine</td>
              <th>19</th> 
            </tr>
            <tr>
              <th>20</th> 
              <td>Lorelei Blackstone</td> 
              <td>Data Coordinator</td> 
              <td>Witting, Kutch and Greenfelder</td> 
              <td>Kazakhstan</td> 
              <td>6/3/2020</td> 
              <td>Red</td>
              <th>20</th> 
            </tr>
          </tbody> 
          <tfoot>
            <tr>
              <th></th> 
              <td>Name</td> 
              <td>Job</td> 
              <td>company</td> 
              <td>location</td> 
              <td>Last Login</td> 
              <td>Favorite Color</td>
              <th></th> 
            </tr>
          </tfoot>
        </table>
      </div>
      <Pagination />
    </div>
  )
}

export default TableInfo