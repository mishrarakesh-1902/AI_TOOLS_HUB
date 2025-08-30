// import OpenAI from 'openai';
// import 'dotenv/config';

// const client = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY, // This is the default and can be omitted
// });

// const response = await client.responses.create({
//   model: 'gpt-4o-mini',
//   input: 'Joke related to computer science',
// });

// console.log(response.output_text);



import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import chatRoutes from './routes/chat.js';


const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());


app.use('/api', chatRoutes);

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
  connectDB();
});

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL); 
        console.log("Connected with Database");
        
    } catch (err) {
        console.log("Failded to connect with db" , err);
    }
};
