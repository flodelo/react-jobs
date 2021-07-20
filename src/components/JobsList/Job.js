import React from 'react';

import PropTypes from 'prop-types';

export default function Job({
  title, description, company, technology, locality, contract,
}) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{company}</p>
      <p>{technology}</p>
      <p>{locality}</p>
      <p>{contract}</p>
    </div>
  );
}

Job.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  company: PropTypes.string,
  technology: PropTypes.string,
  locality: PropTypes.string,
  contract: PropTypes.string,
};

Job.defaultProps = {
  description: '',
  company: '',
  technology: '',
  locality: '',
  contract: '',
};
