import publicIP from 'react-native-public-ip';

const GetContinent = async () => {
    // const [region, setRegion] = useState({})
    const key = process.env.REACT_ACCESS_KEY;
    const publicIpAddress = await publicIP();
    const url = `http://api.ipstack.com/${publicIpAddress}?access_key=${key}`
    return fetch(url, {
            method: 'GET'
        })
        .then(res => {
            return res.json();
        }) 
        .catch(err => console.log(err))
}


export default GetContinent;