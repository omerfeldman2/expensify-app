// Higher order Component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
      <h1>Info</h1>
      <p>The info is: {props.info}</p>
  </div>
);
//
// const withAdminWarning = (WrappedComponent) => {
//       return (props) => (
//           <div>
//               <p>This is private info. please done share</p>
//               <WrappedComponent {...props} />
//           </div>
//       );
// };
//
// const AdminInfo = withAdminWarning(Info);

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>Log In the view the details</p> }
        </div>
    );
};

const AuthInfo = requireAuthentication(Info);


// ReactDOM.render(<AdminInfo info='there are the details'/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info='there are the details'/>, document.getElementById('app'));
