import React from 'react';
import { BarraDeProgresso } from './styled';
export const ProgressBar = ({ ...rest }) => {
  return (
    <div className='progress' style={{ width: '100%' }}>
      <BarraDeProgresso
        {...rest}
        // className='progress-bar progress-bar-striped progress-bar-animated'
        // role='progressbar'
        // aria-valuenow='75'
        // aria-valuemin='0'
        // aria-valuemax='100'
        // style={{ width: '80%', backgroundColor: 'green' }}
      ></BarraDeProgresso>
    </div>
  );
};
