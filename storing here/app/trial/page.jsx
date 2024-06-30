"use client"

import mongoose from 'mongoose';
import React from 'react'
const uri = "mongodb+srv://advaitasoni:jKqeQ6SI2N2mwCOv@next-app.xasvxe1.mongodb.net/?appName=next-app";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}


const page = () => {
    run().catch(console.dir);
  return (
    <div>
      hello wolrd
    </div>
  )
}

export default page



