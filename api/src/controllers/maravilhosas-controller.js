//const maravilhosaCollection = require('../models/maravilhosas-models')
const maravilhosaCollection = require("../models/maravilhosaSchema")


const getMaravilhosas =  (req,res) => {
    const { error, data } = model.selectAllData()
    if (error === null){
        res.status(200).json(data);
    }else{
        res.status(400).json({"message": error.message});
    }
}

//getMaravilhosaById
const getMaravilhosaById =  (req,res) => {
    const { error, data } = model.selectDataById(req.params.id)
    if (error === null){
        res.status(200).json(data);
    }else{
        res.status(404).json({"message": error.message});
    }
}

//addMaravilhosa 
const addMaravilhosa = (req,res) => {
    console.log(req.url)
    const maravilhosaBody = req.body
    const maravilhosa = new maravilhosaCollection(maravilhosaBody)

    maravilhosa.save((error) => {
        if(error){
            return res.status(400).send(error)
        }else{
            return res.status(201).send(maravilhosa)
        }
    }
   
    )}

//updateMaravilhosa 
const updateMaravilhosa = (req, res) => {
    const idParam = req.params.id
    const maravilhosaBody = req.body
    const novo = {new:true}
    
}

//deleteMaravilhosa
const deleteMaravilhosa = (req, res) => {
    const {error} = model.deleteData(req.params.id)
    if(error===null) {
        res.status(204).send("Registro removido com sucesso.")
    } else {
        res.status(404).json({"message": error.message})
    }
}

module.exports = {
    getMaravilhosas, 
    getMaravilhosaById, 
    addMaravilhosa, 
    updateMaravilhosa, 
    deleteMaravilhosa 
}