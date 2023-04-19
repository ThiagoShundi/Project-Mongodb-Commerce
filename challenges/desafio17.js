db.produtos.updateMany({}, {
    $set: {
        resumoProdutos: {
            franquia: "McDonalds",
            totalProdutos: db.produtos.countDocuments(),
        },
    },
});

db.produtos.find({}, {
    resumoProdutosfranquia: 1,
    totalProdutos: 1,
    _id: 0,
});
