import { Field, Form, Formik } from 'formik';
import React, { ChangeEvent } from 'react';
import { PlusIcon } from '../../icons/PlusIcon';
import { SendIcon } from '../../icons/SendIcon';
import { SmileIcon } from '../../icons/SmileIcon';
import { CommentsList } from '../CommentsList';
import { PostsSort } from '../PostsSort';
import styles from './commentform.css';

interface ICommentForm {
  id: string;
  subreddit: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

interface Values {
  commentText: string;
}

export function CommentForm({ id, subreddit, value, onChange }: ICommentForm) {
  return (
    <div className={styles.wrapper}>
      <PostsSort />
      <Formik initialValues={{ commentText: '' }} onSubmit= {(values: Values) => {
        values.commentText = value;
        alert(`Данные отправлены: ${JSON.stringify(values, null, 2)}`);
      }}>
        <Form className={styles.form}>
          <button className={styles.commentBlockMobileBtn} >
            <PlusIcon />
          </button>
          <Field name="commentText" as="textarea" className={styles.input} value={value} onChange={onChange} />
          <div className={styles.editButtons}></div>
          <button className={styles.commentBlockMobileBtn}>
            <SmileIcon />
          </button>
          <button type="submit" className={styles.commentBlockMobileBtn}>
            <SendIcon />
          </button>
          <button type="submit" className={styles.button} >Комментировать</button>
        </Form>
      </Formik>
      <CommentsList id={id} subreddit={subreddit} />
    </div>
  );
}
