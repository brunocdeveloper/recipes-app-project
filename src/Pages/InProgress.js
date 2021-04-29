import React from 'react';

class InProgress extends React.Component {
  render() {
    const { match: { params: { id } } } = this.props;
    return (
      <div>
        {`InProgress${id}`}
      </div>
    );
  }
}

InProgress.propTypes = ({
}).isRequired;

export default InProgress;
