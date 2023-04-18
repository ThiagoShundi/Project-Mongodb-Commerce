db.produtos.find({
    $or: [{
            curtidas: {
                $gte: 10,
                $lt: 100,
            }
        },
    ]
}, {
    nome: 1,
    curtidas: 1,
    _id: 0
});