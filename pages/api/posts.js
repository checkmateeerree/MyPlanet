import { getToken } from "next-auth/jwt"

import {
    connectToDatabase
} from '../../lib/db';

const secret = process.env.NEXTAUTH_SECRET

export default async (req, res) => {
  const token = await getToken({ req, secret })
  if (token) {
    const client = await connectToDatabase();
    const db = client.db('db');
    const posts = await db.collection("posts").find().toArray()
    // Signed in
    console.log(posts)
    return res.json(posts)
  } else {
    // Not Signed in
    res.status(401)
  }
  res.end()
}