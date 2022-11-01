import myJson from '../../json/data.json';

async function portfolio(req, res) {
const json2 = myJson;
   
      await res.json(json2);
}

export default portfolio;