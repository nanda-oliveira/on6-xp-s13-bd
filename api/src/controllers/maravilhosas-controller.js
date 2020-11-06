
const { model } = require("mongoose")
const maravilhosaModel = require("../models/maravilhosaSchema")


const getMaravilhosas =  (req,res) => {
    console.log(req.url)
    model.maravilhosaCollection.find((error,maravilhosa)=>{
        if(error){
            return res.status(500).send(error)
        }else{
            return res.status(200).send(maravilhosa)
        }
    })
}

//getMaravilhosaById
const getMaravilhosaById =  (req,res) => {
    const idParam = req.params.id
    model.maravilhosaCollection.findById(idParam, (error, maravilhosa)=>{
        if(error){
            return res.status(500).send(error)
        }else{
            if(maravilhosa){
                return res.status(200).send(maravilhosa)
            }else {
                return res.status(404).send('Não encontrada')
            }
        }
    }
    )
}

//addMaravilhosa 
const addMaravilhosa = (req,res) => {
    console.log(req.url)
    const maravilhosaBody = req.body
    const maravilhosa = new model.maravilhosaCollection(maravilhosaBody)

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

    model.maravilhosaCollection.findByIdAndUpdate(
        idParam,
        {$set: {maravilhosaBody}},
        novo,
        (error,maravilhosa) =>{
            if(error){
                return res.status(500).send(error)
            }else if (maravilhosa){
                return res.status(200).send(maravilhosa)
            }else{
                return res.sendStatus(400)
            }
        }
    )
}

//deleteMaravilhosa
const deleteMaravilhosa = (req, res) => {
    const idParam = req.params.id
    model.maravilhosaCollection.findByIdAndDelete(idParam, (error, maravilhosa)=>{
        if(error){
            return res.status(500).send(error)
        }else if(maravilhosa){
            return res.status(200).send("Item apagado com sucesso")
        }else{
            return res.sendStatus(404)
        }
    })
}

module.exports = {
    getMaravilhosas, 
    getMaravilhosaById, 
    addMaravilhosa, 
    updateMaravilhosa, 
    deleteMaravilhosa 
}