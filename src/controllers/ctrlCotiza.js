const express = require('express');
const Cotizacion = require('../modules/Cotizaciones');

const CotizacionCtrl = {

    //crear cotizacion
    newCoti: async (req, res) => {
        try {
            const newcotizacion = new Cotizacion(req.body);
            await newcotizacion.save((error, result) => {
                return res.status(200).send({
                    success: true,
                    message: 'Cotización creada',
                    newcotizacion
                })
            })
        } catch (error) {
            return res.status(400).send({
                success: false,
                message: error.message,
            })
        }
    },

    //buscar cotizacion
    idCoti : async (req, res) => {
        try {
            const {_id : id} = req.params.id;
            let cotizacion = Cotizacion.findById(id).populate(
                {
                    path:products,
                    select :' name category idProd cantidad price'
                }
            );
                if (!cotizacion) {
                    return res.status(500).send({
                        success: false,
                        message: "Error al procesar la peticion",
                    })
                }else {
                    return res.status(200).send({
                        success: true,
                        message: "Cotizacion encontrada",
                        cotizacion,
                    })
                }
        } catch (error) {
            return res.status(400).send({
                success: false,
                message: error.message,
            })
        }
    },

    // listar cotizaciones
    listCoti : async (req, res) => {
        try {
            let cotizaciones = await Cotizacion.find({});
            if(!cotizaciones) {
                return res.status(500).send({
                    success: false,
                    message: "Error al procesar la peticion",
                });
            }else {
                return res.status(200).send({
                    success: true,
                    message: "Cotizaciones listadas",
                    cotizaciones,
                });
            }
        }catch (error) {
            return res.status(400).send({
                success: true,
                message: error.message,
            });
        }




    },

    //Eliminar cotizacion
    delCoti : async (req, res) =>{
      try {
          const {_id : id} = req.params.id;
          let cotizacion = await Cotizacion.findByIdAndDelete(id);
          res.status(200).send({
              sucess : true,
              message : 'Cotizacion eliminada',
              cotizacion,
          })
      }catch (error) {
          res.status(500).send({
              sucess: false,
              message: error.message,
          });
      }
    },

    //Actualizar cotizacion
    actCoti : async (req, res) => {
        try {
            const {_id : id} = req.params.id;
            const {cotiz} = req.body;
            let cotizacion = await Cotizacion.findByIdAndUpdate(
                {_id: id},
                { $addToSet: {products: cotiz}
            });
            res.status(200).send({
                success: true,
                message: "Cotizacion actualizada correctamente",
                cotizacion,
            })
        }catch (error) {
            res.status(error).send({
                success: false,
                message: error.message,
            })
        }

    },

};

module.exports = CotizacionCtrl;