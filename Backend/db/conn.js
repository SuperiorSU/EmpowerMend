const mongoose=require('mongoose')
const DB = "mongodb://localhost:27017/Hope";

// mongoose.connect(DB,{
//     userNewUrlP
// })
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB");
    console.log(err);
  });