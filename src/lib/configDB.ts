import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    connectionString: import.meta.env.NEON_URL,
    ssl: true
});

pool.on("error", (err) => {
    console.log("Error connecting to the PostgreSQL database", err);
});

export { pool };