import './App.css';
import {newLogin} from './actions/login';
import {logout} from './actions/logout';
import {useEffect} from 'react';
import { connect } from "react-redux";
function App({newLogin, logout, data}) {
  console.debug('debug1');
  const owneraddr  = 'rfr';
  useEffect(()=>{console.debug('debug');
                 owneraddr!= null? newLogin(): logout()},[owneraddr]);
  useEffect(()=>{if(owneraddr!=null) newLogin()},[data])
  return (
    data.map((data)=>{return <div>data</div>})
  );
}

function mapStateToProps (state) {
  return state;
};

const mapDispatchToProps = dispatch => ({
  newLogin: () => dispatch(newLogin),
  logout:()=> dispatch(logout)
  
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
