/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
const { agregarRegistros, agregarPuntaje } = require("./firestore");
const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.agregarRegistros = onRequest((request, response) => {
  logger.info("Agregando Registros!", { structuredData: true });
  agregarRegistros(request, response);
});
exports.agregarPuntaje = onRequest((request, response) => {
  logger.info("Agregando metricas!", { structuredData: true });
  agregarPuntaje(request, response);
});
