import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { fetchComments, createComment } from 'services/comments';

import Button from 'components/button';

import './styles.scss';

const Comments = ({ isOpen, toggleComment, user, publication_id }) => {

  const [isDisable, disableButton] = useState(true);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState('');

  useEffect(() => {
    publication_id = 1;
    fetchComments(publication_id).then(data => setComments(data));
  }, [publication_id]);

  const handleChange = (e) => {
    e.target.value.length > 0 ? disableButton(false) : disableButton(true);
    setComment(e.target.value);
  };

  const handleClick = () => {
    toggleComment(!isOpen)
  };

  const sendComment = (e) => {
    createComment({
      name: user.name,
      user_id: user.id,
      publication_id: 5,
      comment,
      date: new Date ()
    });
    toggleComment(!isOpen);
  };

  return (
    <div className="c-comments">
      {comments && comments.length > 0 && comments.map(({ user_id, date, comment }) =>
        <div>
          <h3>{user_id}<span>{date}</span></h3>
          <div className="comments-content">
            <p>{comment}</p>
          </div>
        </div>
      )}
      <form method="post">
        <textarea
          className="textarea"
          name="Write your message"
          placeholder="Write your message"
          onChange={handleChange}
          rows="4" />
      </form>

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
          onClick={sendComment}
          className={classnames('-background -secondary -big',
            { '-disable': isDisable })}
        >
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
