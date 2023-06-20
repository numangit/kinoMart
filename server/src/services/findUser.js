
const findUserById = async (id) => {
  const options = { password: 0 }; //exclude password field from users results
  const user = await User.findById(id, options)
};