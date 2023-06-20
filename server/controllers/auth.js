const register = async (req, res) => {
  res.status(201).json({ msg: 'register successfully' })
}

const login = async (req, res) => {
  res.status(200).json({ msg: 'login successfully' })
}

module.exports = { register, login }
