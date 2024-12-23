const userModel = require('../Model/model')

exports.getUser = async (req,res) => {

try{
  const users =await userModel.find()
  res.json(users)
}
catch(err){
  console.log(err)
}

}

exports.addUser = async (req,res) => {

  try{
    let dataAdd = new userModel(req.body)
    await dataAdd.save()
    res.status(200).send('Data Has Been Added')
  }
  catch(err){
    res.status(401).send(err)
  }
}

exports.updateUser = async (req,res) => {
  let id = req.params.id

  try{

    let data = await userModel.findOneAndUpdate({_id : id}, req.body)
    res.status(200).send('User Updated')
  }
  catch(err){
    res.status(500).send(err)
  }
}

exports.removeUser = async (req,res) => {

  let id = req.params.id

  try{

    let remove = await userModel.findOneAndDelete({_id : id})
    res.status(200).send('User Deleted')
  }
  catch(err){
    res.status(500).json(err)
  }
}

exports.findUser = async (req,res) => {

  try{
    let find = await userModel.find({name : req.body.text})
    res.json(find)
  }
  catch(err){
    res.send(err.message)
  }
}