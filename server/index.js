const express = require('express');
const cors = require('cors');
const path = require('path');
//require('dotenv').config();

// google sheets api key is in the root .env file

// Load .env from the project root (one level up from server/)
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') });

const API_KEY = process.env.API_KEY;
const SHEET_ID = process.env.SHEET_ID;

if (!API_KEY || !SHEET_ID) {
  console.warn('Warning: API_KEY or SHEET_ID not found in root .env');
}

const app = express();
const PORT = process.env.PORT || 8000; // Use a different port than your React app

app.use(cors());
app.use(express.json());

app.get('/api/work', async (req, res) => {
    
  try {
    const metadataUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}?key=${API_KEY}`;
    const metadataResponse = await fetch(metadataUrl);
    const metadataData = await metadataResponse.json();

    if (metadataData.error) {
      return res.status(400).json({ error: metadataData.error.message });
    }

    // Get the grid properties to find the last row
    const sheet = metadataData.sheets[0];
    const gridProperties = sheet.properties.gridProperties;
    const lastRow = gridProperties.rowCount; // Total rows in sheet

    // Fetch all data from row 2 to the last row dynamically
    const range = `Sheet1!A2:D${lastRow}`;
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}?key=${API_KEY}`;
    
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      console.error('Sheet API Error:', data.error);
      return res.status(400).json({ error: data.error.message });
    }

    const rows = data.values || [];

    // Convert rows to objects
    const work = rows.map((row) => ({
      title: row[0] || '',
      imageUrl: row[1] || '',
      description: row[2] || '',
      iframe: row[3] || '',
      date: row[4] || '',
    }));
    //console.log('Fetched work items:', work);
    res.json({ work });
  } catch (error) {
    //console.error('Error fetching sheet:', error);
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the Express server!' });
});

app.listen(PORT, () => {
  //console.log(`Server is running on http://localhost:${PORT}`);
});