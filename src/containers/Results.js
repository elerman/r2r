import React from 'react';
import {connect} from 'react-redux'
import R2Route from '../components/R2Route'

class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.results){
        const list = this.props.results.routes.map((route,index)=>{
            return <li key={index}><R2Route route={route} results={this.props.results}/></li>
        })

        return (<div className="row">
          <div className="col col-md">
            <ul>{list}</ul>
          </div>
        </div>)
        
    }else return null
  }
}

const mapStateToProps = (state)=> {
    return {
        results : state.searchReducer.results
    }
}

export default connect(mapStateToProps)(Results);
