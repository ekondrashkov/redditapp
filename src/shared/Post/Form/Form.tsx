import React, { FormEvent } from 'react';
import { PlusIcon } from '../../icons/PlusIcon';
import { SendIcon } from '../../icons/SendIcon';
import { SmileIcon } from '../../icons/SmileIcon';
import styles from './form.css';

interface IForm {
  refLink?: any;
}

export function Form({ refLink }: IForm) {
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <button className={styles.commentBlockMobileBtn} >
        <PlusIcon />
      </button>
      <textarea className={styles.input} ref={refLink}/>
      <div className={styles.editButtons}></div>
      <button className={styles.commentBlockMobileBtn}>
        <SmileIcon />
      </button>
      <button type="submit" className={styles.commentBlockMobileBtn}>
        <SendIcon />
      </button>
      <button type="submit" className={styles.button} >Комментировать</button>
    </form>
  );
}
