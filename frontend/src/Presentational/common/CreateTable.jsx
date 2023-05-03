import React, { useState } from 'react';
import styled from 'styled-components';
import EvalStatus from './EvalStatus';

function CreateTable({ setTest, data, test }) {
  const [selected, setSelected] = useState(test);

  const idxHandler = (idx) => {
    setSelected(idx);
    setTest(idx);
    console.log(selected);
  }

  const dataTable = data?.map((elem, idx) => {
    if (elem.value < 0){
      elem.eval = "unacceptable";
    }
    else if (elem.value < 0.03){
      elem.eval = "unsatisfactory";
    }
    else if (elem.value < 0.3){
      elem.eval = "satisfactory";
    }
    else {
      elem.eval = "Good";
    }
    
    return (
      <tr className='tableBody' key={idx}>
        <td style={{ width: '30px' }}><input type="radio" checked={idx === selected} onChange={() => idxHandler(idx)}/></td>
        <td>{elem.name}</td>
        <td>
          <EvalStatus evalValue={elem.eval}/>
        </td>
        <td>{elem.value}</td>
      </tr>
    );
  });
  
  // Render the UI for your table
  return (
    <Styles>
      <table className="table">
        <thead>
          <tr className='tableHeader'>
            <td style={{ width: '30px' }}></td>
            <td>Component</td>
            <td>Status</td>
            <td>AssetScore</td>
          </tr>
        </thead>
        <tbody>
          {dataTable}
        </tbody>
      </table>
    </Styles>
  );
}

export default CreateTable;

const Styles = styled.div`
  table {
    border-spacing: 0;
    width: 100%;
    border: 1px solid #ddd;

    td {
      text-align: center;
      font-size: 12px;
    }

    .tableHeader {
      font-weight: bold;
      background-color: #ffffff;
    }

    .tableBody {
      cursor: pointer;

      &:hover {
        background-color: #ddd;
      }

      input[type='radio']:checked {
        background-color: #2196f3;
        color: white;
      }
    }
  }
`;