import React from 'react';

const Row = ({row}) => (
  <div>
      {row.category2}  ({row.date})
      <br/>
      {row.description}
      <hr/>
  </div>
)

export default Row;