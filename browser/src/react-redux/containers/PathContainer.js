import React from 'React';

const PathContainer = (props) => {
  return (
    
  );
}

const mapStateToProps = (state) => {
  return {
    path: state.position.path
  }
}

export default connect(mapStateToProps)(PathContainer);