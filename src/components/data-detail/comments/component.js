import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from 'components/button';
import commentInfo from './constants';
import './styles.scss';

const Comments = ({ toggleComment, isOpen }) => {

  const [isDisable, disableButton] = useState(true);

  const handleChange = (e) => {
    e.target.value.length > 0 ? disableButton(false) : disableButton(true)
  };

  const handleClick = () => {
    toggleComment(!isOpen)
  }

  return (
    <div className="c-comments">
      {commentInfo.map(info =>
        <div>
          <h3>{info.user}<span>{info.date}</span></h3>
          <div className="comments-content">
            <p>{info.comment}</p>
            <form method="post">
              <textarea
                name="Write your message"
                placeholder="Write your message"
                onChange={handleChange}
                rows="4" />
            </form>
          </div>
        </div>
      )}

      <div className="tooltip-controls">
        <Button
          onClick={handleClick}
          disable={isDisable}
          className="-background -tertiary -big"
        >
          Cancel
          </Button>

        <Button
          type="submit"
          className={classnames('-background -secondary -big', { ['-disable']: isDisable })}>
          Add comment
        </Button>
      </div>
    </div>
  )
};

Comments.propTypes = {
  toggleComment: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
}

export default Comments;
