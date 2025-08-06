const mongoose = require("mongoose");

const teamsSchema = new mongoose.Schema(
  {
    name: String,
    password: String,
    email: String,
    Dashboard: Boolean,
    master: Boolean,
    productmanagement: Boolean,
    clients: Boolean,
    enquirylist: Boolean,
    enquirycalender: Boolean,
    quotation: Boolean,
    termsandcondition: Boolean,
    paymentreports: Boolean,
    inventoryproductlist: Boolean,
    reports: Boolean,
    damaged: Boolean,
    user: Boolean,
    orders: Boolean,
  },
  {
    timestamps: true,
  }
);

const TeamMembers = mongoose.model("TeamMembers", teamsSchema);
module.exports = TeamMembers;
