//==============================
//Puerto
//==============================
process.env.PORT = process.env.PORT || 3000;
//==============================
//Vencimiento del token
//==============================
//60 segundos
//60 minutos
//24 horas
//30 dias
process.env.CADUCUDAD_TOKEN = 60 * 60 * 24 * 30;


//==============================
//SEED de autenticacion
//==============================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

//==============================
// Google Client ID
//==============================
process.env.CLIENT_ID = process.env.CLIENT_ID || '651526361562-39nsrqtdtoahca757pkvgu72jrbjc1gu.apps.googleusercontent.com';