const express = require('express');
const UserAdms = require('../modules/UserAdms');

const UserAdmsCtrl = {

    //crear adnmin
    newAdmin: async (req, res) => {
        try {
            const newAdmin = new UserAdms(req.body);
            await newAdmin.save((error, result) => {
                return res.status(200).send({
                    success: true,
                    message: 'Admin creado',
                    newAdmin
                })
            })
        } catch (error) {
            return res.status(400).send({
                success: false,
                message: error.message,
            })
        }
    },

    //buscar admin
    idAdmin : async (req, res) => {
        try {
            const {_id : id} = req.params.id;
            let admin = UserAdms.findById(id).exec((err,result)=>{
                if (!admin) {
                    return res.status(500).send({
                        success: false,
                        message: "Error al procesar la petición",
                    })
                }else {
                    return res.status(200).send({
                        success: true,
                        message: "Admin encontrado",
                        admin,
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

    // listar admins
    listAdmin : async (req, res) => {
        try {
            let admin = await UserAdms.find({});
            if(!admin) {
                return res.status(500).send({
                    success: false,
                    message: "Error al procesar la peticion",
                });
            }else {
                return res.status(200).send({
                    success: true,
                    message: "Admins listados",
                    admin,
                });
            }
        }catch (error) {
            return res.status(400).send({
                success: true,
                message: error.message,
            });
        }




    },

    //Eliminar admin
    delAdmin : async (req, res) =>{
        try {
            const {_id : id} = req.params.id;
            let admin = await UserAdms.findByIdAndDelete(id);
            res.status(200).send({
                sucess : true,
                message : 'Producto eliminado',
                admin,
            })
        }catch (error) {
            res.status(500).send({
                sucess: false,
                message: error.message,
            });
        }
    },

    //Actualizar ad,om
    actAdmin : async (req, res) => {
        try {
            const {_id : id} = req.params.id;
            const {adm} = req.body;
            let admin = await UserAdms.findByIdAndUpdate(id, adm);
            res.status(200).send({
                success: true,
                message: "Admin actualizado correctamente",
                admin,
            })
        }catch (error) {
            res.status(error).send({
                success: false,
                message: error.message,
            })
        }

    },

};

module.exports = UserAdmsCtrl;