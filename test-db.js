const { Client } = require('pg');
const connectionString = "postgresql://postgres:%23%4002261967210@db.avnziktipnvpwwylaidv.supabase.co:5432/postgres";

const client = new Client({
  connectionString: connectionString,
});

async function testConnection() {
  try {
    console.log("Connecting to database...");
    await client.connect();
    console.log("Connected successfully!");
    const res = await client.query('SELECT current_database(), current_user');
    console.log("Database Info:", res.rows[0]);
    await client.end();
  } catch (err) {
    console.error("Connection error:", err.stack);
    process.exit(1);
  }
}

testConnection();
