const fetch = require("node-fetch");

exports.handler = async (event) => {
  try {
    const { lat, lon, alt } = JSON.parse(event.body);
    const API_KEY = process.env.CLOUDRF_KEY;

    const url = "https://api.cloudrf.com/area"; // ou o endpoint correto

    const body = {
      lat: parseFloat(lat),
      lon: parseFloat(lon),
      alt: parseFloat(alt),
      frq: 915,
      txw: 1,
      ant: 2.15,
      txh: parseFloat(alt),
      rxh: 1.5,
      txp: 100,
      rxg: 0,
      pol: "v",
      pm: 2, // modo de propagação
      rxl: -120,
      azi: 0,
      ea: 1,
      fil: 0,
      out: "kmz",
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        key: API_KEY,
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Erro no proxy: " + error.message }),
    };
  }
};
