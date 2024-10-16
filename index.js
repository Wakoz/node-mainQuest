import dotenv from "dotenv";
import cowsay from "cowsay";
dotenv.config(); 

const name = process.env.DB_USER;
const campus = process.env.DB_CAMPUS;
const say = `I am ${name}, I'm student for ${campus} !!!`;

console.log(cowsay.say({
    text : say,
    e : "oO",
    T : "u"
}));
