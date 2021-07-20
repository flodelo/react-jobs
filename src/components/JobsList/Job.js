import React from 'react';

import PropTypes from 'prop-types';

export default function Job({ job }) {
  return (
    <div>
      <h1>{job.title}</h1>
      <p>{job.description}</p>
      <p>{job.company}</p>
      <p>{job.technology}</p>
      <p>{job.locality}</p>
      <p>{job.contract}</p>
    </div>
  );
}

Job.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  company: PropTypes.string,
  technology: PropTypes.string,
  locality: PropTypes.string,
  contract: PropTypes.string,
};

Job.defaultProps = {
  title: '',
  description: '',
  company: '',
  technology: '',
  locality: '',
  contract: '',
};
