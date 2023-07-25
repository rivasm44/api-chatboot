const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

const serviceAccount = require("./config/credentials.json");

initializeApp({
  credential: cert(serviceAccount),
});
const db = getFirestore();
const getUsers = async () => {
  try {
    return await db.collection("usuarios").get();
  } catch (e) {
    console.log(`Ocurrio un error al obtener los usuarios -->, ${e.message}`);
  }
};

const getAccumulated = async (id) => {
  try {
    let metricas = {};
    const snapshot = await db.collection("puntaje").where("ID", "==", id).get();

    if (snapshot.empty) {
      console.log(`Datos de puntaje ----> ${id}`);
      return { valid: false, metricas };
    }
    snapshot.forEach((doc) => {
      console.log(`Información del puntaje ---> ${doc.id}, =>`);
      console.log(doc.data());
      metricas = doc.data();
    });
    return { valid: Object.keys(metricas).length > 0, metricas };
  } catch (e) {
    console.log(`Ocurrio un error en getAccumulated -->, ${e.message}`);
    return { valid: false, metricas: {} };
  }
};

const agregarRegistros = async (req, res) => {
  try {
    const batch = db.batch();
    const _datarwt = [];
    const { body } = req;
    body.forEach((registro) => {
      const docRef = db.collection("preregistro").doc();
      _datarwt.push(batch.set(docRef, registro));
    });
    const _dataloaded = await Promise.all(_datarwt);
    await batch.commit();
    res.send(`Agregando Pre Registro!! ${_dataloaded.length}`);
  } catch (error) {
    console.log("Error --->", error.message);
  }
};

const agregarPuntaje = async (req, res) => {
  try {
    const batch = db.batch();
    const _datarwt = [];
    const { body } = req;
    body.forEach((registro) => {
      const docRef = db.collection("puntaje").doc();
      _datarwt.push(batch.set(docRef, registro));
    });
    const _dataloaded = await Promise.all(_datarwt);
    await batch.commit();
    res.send(`Agregando Puntaje!! ${_dataloaded.length}`);
  } catch (error) {
    console.log("Error --->", error.message);
  }
};

module.exports = { getUsers, agregarRegistros, agregarPuntaje };
