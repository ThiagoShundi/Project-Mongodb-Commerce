db.produtos.find({
    vendidos: {
        $lt: 100,
        $gte: 50,
    },
}, {
    nome: 1,
    vendidos: 1,
    _id: 0,
}).sort({
    vendidos: 1,
});