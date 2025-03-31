const asyncHandler = require("express-async-handler");
//@desc Get all contacts
//@route GET /api/contacts
//@access Public

const getContacts = asyncHandler(async(req, res) => {
  res.status(200).json({ message: "Get all contacts" });
});

//@desc create new contacts
//@route POST /api/contacts
//@access Public

const createContact = asyncHandler(async(req, res) => {
  console.log("the request body is", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).json({ message: "please fill in all fields" });
  }
  res.status(201).json({ message: "create new contacts" });
});

//@desc get new contacts
//@route GET /api/contacts/:id
//@access Public

const getContact = asyncHandler(async(req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
});

//@desc update contacts
//@route PUT /api/contacts/:id
//@access Public

const updateContact = asyncHandler(async(req, res) => {
  res.status(200).json({ message: `update contact for ${req.params.id}` });
});

//@desc delete contacts
//@route DELETE /api/contacts/:id
//@access Public

const deleteContact = asyncHandler(async(req, res) => {
  res.status(200).json({ message: `delete contacts from ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
