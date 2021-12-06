import  axios  from "axios";

const Api_route = process.env.REACT_APP_API_TO;

const CheckAuth = () => {

    const sessionToken = window.sessionStorage.getItem('token');

    if(sessionToken != null){
        const config = {
            headers: { Authorization: `Bearer ${sessionToken}`  }
        };
        axios.get(Api_route + "checkUser", config).then(
            (res) => {
                if(res.status === 200){
                    return "yes";
                } else {
                    return "no";
                }
            }
        ).catch((error)=>{
            return 0
        });
    }else{
        return
    }

};

export default CheckAuth;