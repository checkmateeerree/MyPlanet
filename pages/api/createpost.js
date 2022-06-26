
import {
    connectToDatabase
} from '../../lib/db';
import { getToken } from "next-auth/jwt"

const secret = process.env.NEXTAUTH_SECRET

async function handler(req, res) {
    if (req.method !== 'POST') {
        return;
    }

    const token = await getToken({ req, secret })
    if (!token) {
        res.status(401).end()
    }

    const data = JSON.parse(req.body);
    console.log(data)

    const title = data["title"]
    const text = data["text"]

    if (
        !title || !text
    ) {
        res.status(422).json({
            message: 'Invalid input - Make sure title and text are filled out',
        });
        return;
    }

    const client = await connectToDatabase();

    const db = client.db('db');

    const date_time = new Date()
    const date = ("0" + date_time.getDate()).slice(-2);
    const month = ("0" + (date_time.getMonth() + 1)).slice(-2);
    const year = date_time.getFullYear();
    const hours = date_time.getHours();
    const minutes = date_time.getMinutes();

    const timeCreated = hours + ":" + minutes + ", " + year + "-" + month + "-" + date

    const result = await db.collection('posts').insertOne({
        title: title,
        text: text,
        timeCreated: timeCreated
    });

    res.status(201).json({
        message: 'Created Post!'
    });
    client.close();
    return 
}

export default handler;