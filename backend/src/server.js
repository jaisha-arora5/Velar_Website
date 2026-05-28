const express= require('express');
const cors= require('cors');
require('dotenv').config();

const app= express();
const PORT=process.env.PORT || 2000;

app.use(cors());
app.use(express.json());

app.get('/api/v1/health', (req,res)=> {
    res.json({status: "active", message: "Enterprise AI Backend Server is running smoothly."});
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})