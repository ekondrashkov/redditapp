import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { IPostsData } from '../../store/postsStore';
import { IRootReducer } from '../../store/store';
import { CloseButton } from './CloseButton';
import { CommentForm } from './CommentForm';
import { CommentFormContainer } from './CommentFormContainer';
import styles from './post.css';
import { PostControls } from './PostControls';
import { PostHeader } from './PostHeader';
import { PostTextContent } from './PostTextContent';

type PostId = {
  postId: string;
}

export function Post() {
  const history = useHistory();
  const { postId }: PostId = useParams();
  console.log(postId);
  let postData: IPostsData = {
    author: '',
    title: '',
    ups: 0,
    url: '',
    thumbnail: '',
    created: 0,
    id: '',
    iconImg: '',
    comments: 0,
    subreddit: '',
  }
  const postsData = useSelector<IRootReducer, Array<IPostsData>>(state => state.postReducer.data);
  for (let i=0; i < postsData.length; i++) {
    if (postsData[i].id === postId) {
      postData = postsData[i];
      break;
    }
  }

  useEffect(() => {
    const closeBtn = document.querySelector(`#closeButton-${postId}`);
    const backBtn = document.querySelector(`#backButton-${postId}`);
    const postWrapper = document.querySelector(`#postWrapper-${postId}`);
    const post = document.querySelector(`#modal-${postId}`);

    closeBtn?.addEventListener('click', () => history.push('/posts/'));
    backBtn?.addEventListener('click', () => history.push('/posts/'));
    post?.addEventListener('click', (event) => {
      event.__isClicked = true;
    });
    postWrapper?.addEventListener('click', (event) => {
        if (!event.__isClicked) {
          history.push('/posts/')
        }
      }
    );
  }, [postId]);

  const postRoot = document.querySelector('#modal_root');
  if (!postRoot) return null;

  return ReactDOM.createPortal((
    <div className={styles.wrapper} id={`postWrapper-${postId}`}>
      <div className={styles.modal} id={`modal-${postId}`}>
        <PostHeader id={postId}/>
        <PostTextContent author={postData.author} created={postData.created} title={postData.title} iconImg={postData.iconImg} subreddit={postData.subreddit} />
        <div className={styles.content}>
          <img src={postData.thumbnail} alt="Post picture" />
        </div>
        <PostControls ups={postData.ups} comments={postData.comments} />
        <CommentFormContainer id={postId} subreddit={postData.subreddit} />
        <CloseButton id={postId}/>
      </div>
    </div>
  ), postRoot);
}
