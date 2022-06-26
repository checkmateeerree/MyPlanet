import {
    hashPassword
} from '../../../lib/auth';
import {
    connectToDatabase
} from '../../../lib/db';

async function handler(req, res) {
    if (req.method !== 'POST') {
        return;
    }

    const data = req.body;

    const {
        username,
        email,
        password
    } = data;

    console.log(username)
    console.log(email)
    console.log(password)

    if (
        !username ||
        !email ||
        !email.includes('@') ||
        !password ||
        password.trim().length < 7
    ) {
        res.status(422).json({
            message: 'Invalid input - Make sure email is valid and password is 7+ characters long',
        });
        return;
    }

    const client = await connectToDatabase();

    const db = client.db('db');

    const existingEmail = await db.collection('users').findOne({
        email
    })
    const existingUserName = await db.collection('users').findOne({
        username
    });

    if (existingEmail || existingUserName) {
        res.status(422).json({
            message: 'User exists already!'
        });
        client.close();
        return;
    }

    const hashedPassword = await hashPassword(password);

    const date_time = new Date()
    const date = ("0" + date_time.getDate()).slice(-2);
    const month = ("0" + (date_time.getMonth() + 1)).slice(-2);
    const year = date_time.getFullYear();
    const hours = date_time.getHours();
    const minutes = date_time.getMinutes();
    const seconds = date_time.getSeconds();

    const timeCreated = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds

    const result = await db.collection('users').insertOne({
        username: username,
        email: email,
        password: hashedPassword,
        timeCreated: timeCreated
    });

    res.status(201).json({
        message: 'Created user!'
    });
    client.close();
}

export default handler;