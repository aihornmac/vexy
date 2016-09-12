import React from 'react';
import {
  compose,
  withProps,
  setDisplayName,
} from 'recompose';
import classNames from 'classnames';

import styles from './PureInput.scss';

const enhance = compose(
  setDisplayName('TransparentInput'),
  withProps(({
    className
  }) => ({
    className: classNames(className, styles.input)
  })),
);

export default enhance(props => <input {...props} />);
