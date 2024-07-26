import React from 'react'
import { useRouteError } from 'react-router-dom';

function RoutingError(err) {
   err=useRouteError();
    console.log(err);
  return (
    <div>
        <h1 className='text-center text-denger'>{err.data}</h1>
        <h2 className='text-center display-3 text-warning'>{err.status}-{err.statusText}</h2>
    </div>
  )
}

export default RoutingError