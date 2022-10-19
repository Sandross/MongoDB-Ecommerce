db.produtos.find({ $nor: [
    { vendidos: { $eq: 50 } }, { tags: { $exists: true } },
  ] }, { nome: 1, vendidos: 1, _id: 0 });