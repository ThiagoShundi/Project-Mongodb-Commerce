db.produtos.updateMany({}, {
    $push: {
        valoresNutricionais: {
            $each: [],
            $sort: {
                percentual: -1,
            },
        },
    },
}, {
    upsert: true,
});

db.produtos.find({}, {
    nome: 1,
    valoresNutricionais: 1,
    _id: 0,
});