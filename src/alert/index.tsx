import t from 'prop-types'
import React from 'react'

export interface AlertProps {
  /**
   * @description     Alert类型
   * @default
   */
  children: any,
  kind?: 'info' | 'positive' | 'negative' | 'warning';
}

export type kindMap = Record<Required<AlertProps>['kind'], string>

const prefixCls = 'shida-alert';

const kinds: kindMap = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502',
}

const Alert: React.FC<AlertProps> = ({ children, kind = 'info', ...rest }) => {
  return <div
    className={prefixCls}
    style={{
      backgroundColor: kinds[kind]
    }}
    {...rest}
  >
    {children}
  </div>
}

Alert.propTypes = {
  kind: t.oneOf(['info', 'positive', 'negative', 'warning'])
}

export default Alert