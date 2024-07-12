import { useEffect } from 'react';
import Swal from 'sweetalert2';

export const Message = () => {
  useEffect(() => {
    Swal.fire({
      icon: "success",
      title: "Thank you!",
      text: "I will reply to your message as soon as I can",
      background: "#242424",
      color: "#FFFFFF",
      confirmButtonColor: "#4EE1A0",
      iconColor: "#4EE1A0",
      timer: 5000,
    });
  }, []);

  return null;
};
