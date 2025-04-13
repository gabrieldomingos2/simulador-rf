# RF Coverage Simulator

This project is a simple web interface integrated with a serverless function on Netlify to simulate RF signal coverage using the CloudRF API and n8n automation.

## 🛠 Technologies Used

- **HTML + JavaScript** – Front-end user interface
- **Netlify Functions** – Serverless backend (proxy)
- **CloudRF API** – RF signal calculation and KMZ/PNG output
- **n8n** – Workflow automation and API orchestration

## 📦 Project Structure

```
index.html                      # Web form
netlify/functions/simulador.js # Serverless function for proxying requests to n8n
```

## 🚀 How It Works

1. User inputs latitude, longitude, and antenna height.
2. The interface sends a request to a Netlify Function.
3. The function forwards the request to a Webhook in n8n.
4. n8n sends parameters to CloudRF API and receives a KMZ file link.
5. The web interface shows the link for download.

## ✅ Getting Started

1. Clone this repository
2. Connect it to Netlify (Import from Git)
3. In deploy settings:
   - **Publish directory**: `.`
   - **Functions directory**: `netlify/functions`

## 💡 Example Use

Use this tool to simulate coverage maps for wireless planning, emergency communication, or signal studies.

## 📁 Output

- KMZ file (Google Earth compatible)
- Direct link for download

## 🔐 Notes

This simulator assumes you already have:
- A valid CloudRF API token connected inside n8n
- A public Webhook available in your n8n instance

---

Developed by Gabriel 🚀
