db.produtos.updateOne(
{ nome: "Big Mac" },
{ $currentDate: { ultimaModificação: true } },
);
db.produtos.find({ ultimaModificação: { $exists: true } }, { nome: 1, _id: 0 });