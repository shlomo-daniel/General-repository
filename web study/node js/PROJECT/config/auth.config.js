function configeError(message) {
  throw new Error(message);
}

module.exports = {
  jwtKey:
    process.env.JWT_KEY ??
    configeError("envirment variable JWT_KEY is missing"),
};
