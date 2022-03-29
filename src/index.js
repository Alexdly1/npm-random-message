const messages = [
    "Hola",
    "Alex",
    "Remy",
    "Fino",
    "Gino",
    "Diego",
    "Sebizi",
    "Facilito"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * 
    messages.length)];
    console.log(message);
};

module.exports = { randomMsg };