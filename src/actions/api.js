import axios from 'axios';
const BaseURL = 'https://eatoo.uberdoo.com/foodapp/public/api/guest';

const reqObj = { "latitude":13.0358481, "longitude":80.244455 };

export default {
    storeAction: {
        getStoreAction: () => 
            axios.post(`${BaseURL}/listRestaurant`, reqObj).then(res => res),
    },
};
    
