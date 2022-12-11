import { notification } from 'antd';

interface NotificationProps {
  type: 'error' | 'warning' | 'success';
  message: string;
  description: string;
}

export const notificate = ({ type, message, description }: NotificationProps): void => {
  return notification[type]({
    message,
    description,
  });
};
