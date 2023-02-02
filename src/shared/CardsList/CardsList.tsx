import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IPostsData, postRequest, postRequestError, postRequestSuccess } from '../../store/postsStore';
import { IRootReducer } from '../../store/store';
import { Card } from './Card/Card';
import styles from './cardslist.css';

export function CardsList() {
  const token = useSelector<IRootReducer, string>(state => state.tokenReducer.tokenValue);
  const [posts, setPosts] = useState<any[]>([]);
  const [nextAfter, setNextAfter] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [errorLoading, setErrorLoading] = useState<string>('');

  let postsData: Array<IPostsData> = [];

  const bottomOfList = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  function elapsedTime(date: number) {
    const postTime: any = new Date(date * 1000);
    const currentTime: any = new Date();
    const gapTime: number = Math.floor((currentTime - postTime) / 1000 / 3600);

    return gapTime;
  }

  function thumbnail(thumbnailLink: any) {
    let imageLink = thumbnailLink;
    if (!imageLink.startsWith('http')) {
      imageLink = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTMf4zYQrwuSVsBu0Jh8GenLfK9cvcLnHaeg&usqp=CAU';
    }

    return imageLink;
  }

  async function load() {
    setLoading(true);
    setErrorLoading('');

    dispatch(postRequest());

    try {
      const { data: { data: { after, children } } } = await axios.get('https://oauth.reddit.com/best/', {
        headers: { Authorization: `bearer ${token}` },
        params: {
          limit: 10,
          after: nextAfter
        }
      });

      setNextAfter(after);
      setPosts(prevChildren => prevChildren.concat(...children));
      children.map((post: any) => {
        let imageLink: string = post.data.thumbnail;
        if (post.data.media) {
          if (post.data.media.oembed) {
            if (post.data.media.oembed.thumbnail_url)
              imageLink = post.data.media.oembed.thumbnail_url;
          }
        }
        if (!imageLink.startsWith('http'))
          imageLink = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTMf4zYQrwuSVsBu0Jh8GenLfK9cvcLnHaeg&usqp=CAU';

        postsData.push({
          author: post.data.author,
          title: post.data.title,
          ups: post.data.ups,
          url: post.data.url,
          thumbnail: imageLink,
          created: elapsedTime(post.data.created),
          id: post.data.id,
          iconImg: 'https://external-preview.redd.it/5kh5OreeLd85QsqYO1Xz_4XSLYwZntfjqou-8fyBFoE.png?auto=webp&s=dbdabd04c399ce9c761ff899f5d38656d1de87c2',
          comments: post.data.num_comments,
          subreddit: post.data.subreddit,
        })
      })
      dispatch(postRequestSuccess(postsData));
    } catch (error) {
      setErrorLoading(String(error));
      dispatch(postRequestError(String(error)));
    }

    setLoading(false);
  }

  useEffect(() => {
    if (!token || token === 'undefined') return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        load();
      }
    }, {
      rootMargin: '10px',
    });

    if (bottomOfList.current) {
      observer.observe(bottomOfList.current);
    }

    return () => {
      if (bottomOfList.current) {
        observer.unobserve(bottomOfList.current);
      }
    }
  }, [nextAfter, token])

  return (
    <ul className={styles.cardsList}>
      {posts.length === 0 && !loading && !errorLoading && (
        <div style={{ textAlign: 'center' }}>Нет ни одного поста</div>
      )}

      {posts.map((post: any) => (
        <Card
          author={post.data.author}
          title={post.data.title}
          ups={post.data.ups}
          url={post.data.url}
          thumbnail={thumbnail(post.data.thumbnail)}
          created={elapsedTime(post.data.created)}
          key={post.data.id}
          id={post.data.id}
          iconImg='https://external-preview.redd.it/5kh5OreeLd85QsqYO1Xz_4XSLYwZntfjqou-8fyBFoE.png?auto=webp&s=dbdabd04c399ce9c761ff899f5d38656d1de87c2'
          comments={post.data.num_comments}
          subreddit={post.data.subreddit}
        />
      ))}

      <div ref={bottomOfList}/>

      {loading && (
        <div style={{ textAlign: 'center' }}>Загрузка...</div>
      )}

      {errorLoading && (
        <div role='alert' style={{ textAlign: 'center' }}>{errorLoading}</div>
      )}
    </ul>
  );
}

