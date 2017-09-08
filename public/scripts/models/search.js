/**
 * Created by zhaizheng on 2017/3/30.
 */
import uri from 'utils/requestAdapter';

let search = {
   userAssociate: (keyword) => {
      return uri.get('/api/search/userAssociate', {keyword});
   },
   
   user: (keyword, pageNo, pageSize) => {
      return uri.get('/api/search/user', {keyword, pageNo, pageSize});
   }
   
};

export default search;