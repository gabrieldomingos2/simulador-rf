const fetch = require("node-fetch");

exports.handler = async (event) => {
  try {
    const url = event.queryStringParameters.url;
    const API_KEY = process.env.CLOUDRF_KEY;

    if (!url) {
      return {
        statusCode: 400,
        body: "Missing 'url' parameter",
      };
    }

    const response = await fetch(url, {
      headers: {
        "key": API_KEY,
      },
    });

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: `Erro ao baixar KMZ: ${response.statusText}`,
      };
    }

    const buffer = await response.buffer();
    const nomeArquivoKmz = url.split('/').pop().split('?')[0] || "cobertura.kmz";

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/vnd.google-earth.kmz",
        "Content-Disposition": `attachment; filename="${nomeArquivoKmz}"`,
      },
      body: buffer.toString("base64"),
      isBase64Encoded: true,
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: `Erro no proxy de download: ${err.message}`,
    };
  }
};
