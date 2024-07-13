import { useEffect } from 'react';
import Swal from 'sweetalert2';

export const MessageErrors = () => {
  useEffect(() => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      background: "rgb(255 5 5 / 57%)",
      backdrop: "blur(10px)",
      color: "#FFFFFF",
      confirmButtonColor: "#4EE1A0",
      iconColor: "#4EE1A0",
      timer: 10000,
    });
  }, []);

  return null;
};