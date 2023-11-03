import classnames from 'classnames';

import './index.less';

export default ({ text, cost, status }: Message.Item) => {
  return (
    <p className={classnames(
      'message-item',
      `message-item--${status}`
    )}>
      {text}
      <span className='message-item__cost'>({cost}ms)</span>
    </p>
  );
};
