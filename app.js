require("dotenv").config();
require("./db/conn.js");

const cors=require('cors');
const users=require('./schema/user-schema.js');
const express=require("express");

const router=require("./routes/router.js");
const PORT=8000;
const app=express();

app.use(cors());
app.use(express.json());
app.use(router);
app.listen(PORT,()=>console.log(`Server running in port ${PORT}`));