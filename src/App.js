
import React, { Component } from 'react';
import { ReactiveBase } from '@appbaseio/reactivesearch';
import { DataSearch } from '@appbaseio/reactivesearch';

class Main extends React.Component {
 
  render() {
    return (
      <div className="main-container">
        <ReactiveBase  app="mrcarscraig"
          credentials="3paTsKrNe:0f731b8d-e4d0-44b6-b77a-8fd95c018aa1">
            
          Hello from ReactiveSearch!
        </ReactiveBase>
        <DataSearch
        
        
        
        />
      </div>
    );
  }
}
export default Main;



