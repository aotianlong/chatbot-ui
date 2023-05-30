import { sslogin } from '@/mbm/login'
import { handleApiKeyChange } from '@/components/Chatbar/Chatbar.context'
sslogin({
  isLoggedIn () {
    return localStorage.getItem("apiKey");
  },
  handleAccount (account) {
    handleApiKeyChange(account.accessKey);
    return localStorage.setItem("apiKey", account.accessKey);
  }
});
export { default, getServerSideProps } from './api/home';
