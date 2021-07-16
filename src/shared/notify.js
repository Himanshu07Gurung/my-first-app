import { toast } from "react-toastify";

var toastId="";

const notify = (type, message) => {
  if (!toast.isActive(toastId)) {
	switch (type) {
	  case "success":
		return (toastId = toast.success(message));
	  case "error":
		return (toastId = toast.error(message));
	  default:
		toastId = toast(message);
	}
  }
};

export default notify;