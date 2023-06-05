module.exports = (sequelize, Sequelize) => {
  const Pets = sequelize.define("pets", {
    pets_id: {
      type: Sequelize.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },

    nameanimal: {
      type: Sequelize.STRING,
      // nao permite valor nulo allowNull:false,
      allowNull: false,
    },

    idade: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    animal: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    raca: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    namedono: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    telefone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  return Pets;
};
