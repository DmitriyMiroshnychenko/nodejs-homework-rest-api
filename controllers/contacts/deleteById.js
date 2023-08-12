const { Contact } = require("../../models");
const { HttpError } = require("../../helpers");

const deleteById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId);
  if (!result) {
    throw HttpError(404, `Contact with id=${contactId} not found`);
  }
  res.status(200).json({ message: "contact deleted" });
};

module.exports = deleteById;
