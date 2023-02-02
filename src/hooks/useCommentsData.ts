import axios from "axios";
import { useContext, useEffect, useState } from "react";

interface IUseCommentsData {
  id: string;
  subreddit: string;
}

interface ICommentsData {
  author?: string;
  iconImg?: string;
  created?: number;
  subreddit?: string;
  commentText?: string;
  id?: string;
  ups?: number;
}

export function useCommentsData({id, subreddit}: IUseCommentsData) {
  const [commentData, setCommentData] = useState<Array<ICommentsData>>([]);

  useEffect(() => {
    axios.get(`http://api.reddit.com/r/${subreddit}/comments/${id}?sort=top`)
      .then((resp) => {
        const comments: Array<any> = resp.data[1].data.children;
        let commentsData: Array<ICommentsData> = [];

        for (let comment = 0; comment < comments.length - 1; comment++) {
          const postTime: any = new Date(comments[comment].data.created * 1000);
          const currentTime: any = new Date();
          const gapTime: number = Math.floor((currentTime - postTime) / 1000 / 3600);

          commentsData.push({
            author: comments[comment].data.author,
            iconImg: 'https://external-preview.redd.it/5kh5OreeLd85QsqYO1Xz_4XSLYwZntfjqou-8fyBFoE.png?auto=webp&s=dbdabd04c399ce9c761ff899f5d38656d1de87c2',
            created: gapTime,
            subreddit: comments[comment].data.subreddit,
            commentText: comments[comment].data.body,
            id: comments[comment].data.id,
            ups: comments[comment].data.ups,
          })
        }

        setCommentData(commentsData);
      })
      .catch(console.log);
  }, [])

  return [commentData]
}
