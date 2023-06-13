import React from 'react';
import Chat from './Chat';
import RatingComponent from './Rating';

function GridComponent() {
  return (
    <div className="grid grid-rows-1 gap-4 sm:grid-flow-col">
      <div className="bg-gray-100 rounded sm:col-span-2 p-4">
      </div>
      <div className="bg-gray-100 rounded p-4">
      </div>
      <div className="bg-gray-100 rounded p-4">
      <RatingComponent/>
      </div>
      <div className="bg-gray-100 rounded row-span-3 p-4">
        <Chat/>
      </div>
    </div>
  );
}

export default GridComponent;
