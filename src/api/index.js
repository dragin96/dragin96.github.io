import axios from "axios";

const API_URL = 'https://www.cbr-xml-daily.ru/';

export async function getCurrency() {
    const url = new URL(`${API_URL}/daily_json.js`);
    return await axios.get(url.href).then(response => {
        if (response.status !== 200) {
            throw Error(response.statusText);
        }
        const json = response.data;
        console.log('getCurrency');
        const keys = Object.keys(json['Valute']);
        json['Valute'] = keys.map((key) => {
            return json['Valute'][key];
        });
        const dateUpdate = new Date(json['Timestamp']);
        const dateNow = new Date();
        json['Timestamp'] = `${dateUpdate.toLocaleDateString()} ${dateUpdate.toLocaleTimeString()}`;
        json['nowDate'] = `${dateNow.toLocaleDateString()} ${dateNow.toLocaleTimeString()}`;
        return json;
    });
}
