const fetch = require("node-fetch");

exports.handler = async (event) => {
  try {
    const { lat, lon, alt } = JSON.parse(event.body);

    const url = `https://gabrieldomingoss.app.n8n.cloud/webhook/sinal?lat=${lat}&lon=${lon}&alt=${alt}`;
    const response = await fetch(url);
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
