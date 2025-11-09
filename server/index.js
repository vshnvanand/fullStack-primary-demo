import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors(
    {    
        origin:[
            "https://localhost:5174",
            "https://localhost:3000",
            // add production url
        ],
        credentials: true,
        methods: ["GET","POST","PUT"],
        allowedHeaders: ["ContentType","Authorization"]
    }
));

// API route
app.get("/api/message",(req,res) => {
    res.json({"message":"Hello from Vaishnav Server"});
});

const PORT = 4000;

app.listen(PORT, () => {console.log(`Server is running at http://localhost:${PORT}`)});


// Cors ->> Proxy[Temporary Juggad], Backend[Proper management and way more important] 