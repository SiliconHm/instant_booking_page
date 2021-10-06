import publicIP from 'react-native-public-ip';

const GetContinent = async () => {
    // const [region, setRegion] = useState({})
    // const key = process.env.REACT_APP_ACCESS_KEY;
    // console.log('key: ', key)
    const publicIpAddress = await publicIP();
    const url = `http://api.ipstack.com/${publicIpAddress}?access_key=40dfac267f618003e5700ee90f912365 `
    return fetch(url, {
            method: 'GET'
        })
        .then(res => {
            return res.json();
        }) 
        .catch(err => console.log(err))
}


export default GetContinent;