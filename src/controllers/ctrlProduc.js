const express = require('express');
const Producto = require('../modules/Productos');

const ProductoCtrl = {

    //crear producto
    newProd: async (req, res) => {
        try {
            const newProducto = new Producto(req.body);
            await newProducto.save((error, result) => {
                return res.status(200).send({
                    success: true,
                    message: 'Producto creado',
                    newProducto
                })
            })
        } catch (error) {
            return res.status(400).send({
                success: false,
                message: error.message,
            })
        }
    },

    //buscar producto
    idProd : async (req, res) => {
        try {
            const {_id : id} = req.params.id;
            let producto = Producto.findById(id).exec((err,result)=>{
                if (!producto) {
                    return res.status(500).send({
                        success: false,
                        message: "Error al procesar la peticion",
                    })
                }else {
                    return res.status(200).send({
                        success: true,
                        message: "Producto encontrado",
                        producto,
                    })
                }
            });

        } catch (error) {
            return res.status(400).send({
                success: false,
                message: error.message,
            })
        }
    },

    // listar productos
    listProd : async (req, res) => {
        try {
            let productos = await Producto.find({});
            if(!productos) {
                return res.status(500).send({
                    success: false,
                    message: "Error al procesar la peticion",
                });
            }else {
                return res.status(200).send({
                    success: true,
                    message: "Productos listados",
                    productos,
                });
            }
        }catch (error) {
            return res.status(400).send({
                success: true,
                message: error.message,
            });
        }




    },

    //Eliminar producto
    delProd : async (req, res) =>{
        try {
            const {_id : id} = req.params.id;
            let producto = await Producto.findByIdAndDelete(id);
            res.status(200).send({
                sucess : true,
                message : 'Producto eliminado',
                producto,
            })
        }catch (error) {
            res.status(500).send({
                sucess: false,
                message: error.message,
            });
        }
    },

    //Actualizar producto
    actProd : async (req, res) => {
        try {
            const {_id : id} = req.params.id;
            const {prod} = req.body;
            let producto = await Producto.findByIdAndUpdate(id, prod);
            res.status(200).send({
                success: true,
                message: "Producto actualizado correctamente",
                producto,
            })
        }catch (error) {
            res.status(error).send({
                success: false,
                message: error.message,
            })
        }

    },

};

module.exports = ProductoCtrl;