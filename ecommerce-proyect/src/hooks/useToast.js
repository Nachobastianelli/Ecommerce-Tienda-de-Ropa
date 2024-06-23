import { faEarListen } from '@fortawesome/free-solid-svg-icons';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

const useToast = () => {
    const showToast = (message, type) => {

        const styleToats = type ? "linear-gradient(to right, #00b09b, #96c93d)" : "linear-gradient(to right, #ff5f6d, #ffc371)"

        Toastify({
            text: message,
            duration: 3000,
            gravity: "top",
            position: "right",
            style: {
                background: styleToats,
                color: "#fff",
                borderRadius: "8px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                padding: "16px",
                textAlign: "center",
                maxWidth: "300px",
                margin: "0 auto",
            },
            onClick: function () { },
        }).showToast();
    };

    return { showToast };


};

export default useToast;