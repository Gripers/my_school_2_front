import React from 'react';
import styles from './C.module.scss';

import { Radio, RadioGroup } from 'rsuite';
import { useDispatch, useSelector } from 'react-redux';

import { updValue } from '../../store/reducers/subFormSlice';
import levelDB from '../../dbs/levelDB';

const LevelBox = () => {
  const dispatch = useDispatch();
  const val = useSelector((state) => state.subForm.value);

  return (
    <RadioGroup
      className={styles.levels_group}
      inline={true}
      value={val}
      onChange={(value) => dispatch(updValue(value))}
      style={{ marginTop: '10px' }}
    >
      {levelDB.map((el) => (
        <Radio key={el.id} value={el.level}>
          {el.level}
        </Radio>
      ))}
    </RadioGroup>
  );
};

export default LevelBox;
