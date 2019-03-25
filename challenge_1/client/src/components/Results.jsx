import React from 'react';
import ResultsRow from './ResultsRow.jsx';

const Results = ({data}) => {
  if (data) {
    return (
      <div>
        {data.map((data) => <ResultsRow row={data}/>)}
      </div>
    )
  } else {
    return <div></div>
  }
}

export default Results;