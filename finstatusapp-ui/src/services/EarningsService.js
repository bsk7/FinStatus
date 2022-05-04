import axios from "axios";

const EARNINGS_API_BASE_URL='http://localhost:8081/api/v1/earnings';

class EarningsService{


    getEarnings(){
        return axios.get(EARNINGS_API_BASE_URL);
    }

    createEarning(earning){
        return axios.post(EARNINGS_API_BASE_URL,earning);
    }
}

export default new EarningsService();