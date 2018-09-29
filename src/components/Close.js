import React from 'react';
import PropTypes from 'prop-types';

const Close = ({ history, closeArticle }) => {
  const click = () => {
    closeArticle();
    history.push('/');
  };

  return (
    <div
      tabIndex={-1}
      role="button"
      className="close"
      onClick={click}
      onKeyPress={click}
    >Close
    </div>
  );
};

Close.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  closeArticle: PropTypes.func.isRequired,
};

export default Close;
