const { HttpError } = require("../../helpers");
const { Contact } = require("../../models");

const filteredFavorite = async (req, res) => {
  const { favorite } = req.query;
  const { _id: owner } = req.user;
  const result = await Contact.find({ owner }, "-createdAt -updatedAt");
  console.log(result);
  if (!result) {
    throw HttpError(404);
  }
  const filteredFavoriteContatcs = result.filter(
    (contact) => contact.favorite === (favorite === "true")
  );
  console.log(filteredFavoriteContatcs);

  res.status(200).json({
    status: "success",
    filteredFavoriteContacts,
  });
};

module.exports = filteredFavorite;
