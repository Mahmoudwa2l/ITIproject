// CustomHook.js
import { useHistory } from "react-router-dom";

export const useRouterHistory = () => {
  const history = useHistory();
  return history;
};
