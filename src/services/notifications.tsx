// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

import { notification } from 'antd';

interface NotificationProps {
  type: 'error' | 'warning' | 'success';
  message: string;
  description: string;
}

const notificate = ({ type, message, description }: NotificationProps): void => {
  return notification[type]({
    message,
    description,
  });
};

export default notificate;
