import publicIP from 'react-native-public-ip';

const GetContinent = async () => {
    // const [region, setRegion] = useState({})
    const ACCESS_KEY = '40dfac267f618003e5700ee90f912365';
    const publicIpAddress = await publicIP();
    const url = `http://api.ipstack.com/${publicIpAddress}?access_key=${ACCESS_KEY}`
    return fetch(url, {
            method: 'GET'
        })
        .then(res => {
            return res.json();
        })
        .catch(err => console.log(err))
}


export default GetContinent;