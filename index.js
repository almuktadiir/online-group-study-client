const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.iawgzs5.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();


    const featuresCollection = client.db("groupStudy").collection("studyFeatures");
    const userAssignmentCollection = client.db("groupStudy").collection("userCreated");
    const submittedAssignCollection = client.db("groupStudy").collection("submitAssign");

    // home feature server
    app.get('/studyFeatures', async (req, res) => {
      const result = await featuresCollection.find().toArray();
      res.send(result);
    })

    // userCollection server
    app.get('/allAssignments', async (req, res) => {
      const result = await userAssignmentCollection.find().toArray();
      res.send(result)
    })

    // app.get('/allAssignmentsDetail/:id', async (req, res)=>{
    //   const id = req.params.id;
    //   console.log(id);
    //   const query = {_id: new ObjectId(id)};
    //   const result = await userCollection.findOne(query);
    //   res.send(result);
    // })


    app.post('/createAssignments', async (req, res) => {
      const addAssignment = req.body;
      console.log(addAssignment);
      const result = await userAssignmentCollection.insertOne(addAssignment);
      res.send(result);
    })

    app.get('/submitAssignment', async(req, res)=>{
      const result = await submittedAssignCollection.find({status:'pending'}).toArray();
      console.log(result);
      res.send(result)
    })

    app.post('/submitAssignment', async(req, res)=>{
      const submittedAssign = req.body;
      console.log(submittedAssign);
      const result = await submittedAssignCollection.insertOne(submittedAssign);
      res.send(result);
    })

    app.put('/submitAssignment/:id', async (req,res)=>{
      const id = req.params.id;
      const submitMarks = req.body;
      console.log(id, submitMarks);

      const filter = {_id : new ObjectId(id)};
      const options = {upsert: true};
      const publishMark = {
        $set: {
          pdf:submitMarks.pdf, 
          note:submitMarks.note, 
          getMarks: submitMarks.getMarks, 
          feedback: submitMarks.feedback, 
          examineeName: submitMarks.examineeName, 
          totalMarks: submitMarks.totalMarks, 
          submittedUserEmail: submitMarks.submittedUserEmail, 
          title: submitMarks.title, 
          status: submitMarks.status
        }
      }
      const result = await submittedAssignCollection.updateOne(filter, publishMark, options);
      res.send(result)
    })

    app.put('/allAssignmetsUpdate/:id', async (req, res) => {
      const id = req.params.id;
      const updateValue = req.body;
      console.log(id, updateValue);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateAssignment = {
        $set: {
          title: updateValue.title,
          marks: updateValue.marks,
          image: updateValue.image,
          dueDate: updateValue.dueDate,
          difficulty: updateValue.difficulty,
          description: updateValue.description,
          userEmail: updateValue.userEmail
        }
      }
      console.log(filter, options, updateAssignment);
      const result = await userAssignmentCollection.updateOne(filter, updateAssignment, options);
      res.send(result)
    })



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res) => {
  res.send('online group study server is running');
})

app.listen(port, () => {
  console.log(`server runnning on port: ${port}`);
})
