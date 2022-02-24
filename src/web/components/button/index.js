import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Button as RawButton } from 'react-weui';
import 'weui';
import 'react-weui/build/packages/react-weui.css';
import './index.less';

export default function Button({
  text,
  size = 'default',
  type = 'primary',
  loading = false,
  disabled = false,
  plain = false,
  events,
  ...props
}) {
  return (
    <RawButton
      type={type}
      size={size === 'mini' ? 'small' : 'normal'}
      disabled={disabled}
      plain={plain}
      onClick={events.customevent}
      {...props}
    >
      {loading && <i className="weui-loading" />}
      {text}
    </RawButton>
  );
}

Button.propTypes = {
  /**
   * 组件类型
   */
  type: PropTypes.oneOf(['primary', 'warn', 'default']),
  /**
   * 按钮大小
   */
  size: PropTypes.oneOf(['default', 'mini']),
  /**
   * 是否禁用
   */
  disabled: PropTypes.bool,

  /**
   * 加载中
   */
  loading: PropTypes.bool,

  /**
   * 镂空
   */
  plain: PropTypes.bool,

  /**
   * 按钮内容
   */
  text: PropTypes.string,

  /**
   * 低码平台注入的事件触发器
   */
  events: PropTypes.objectOf(PropTypes.func),
};

/**
 * 默认属性
 */
Button.defaultProps = {
  type: 'primary',
  size: 'default',
};
