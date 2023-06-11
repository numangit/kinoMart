//dummy data
const users = [
  { id: 1, name: "Numan" },
  { id: 2, name: "Oban" },
  { id: 3, name: "Hassan" },
];

//endpoint logics/controls here
const getUsers = (req, res) => {
  res.status(200).send({
    message: "Users data has been sent",
    users: users
  });
};

module.exports = {
  getUsers
};