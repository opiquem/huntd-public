module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.addColumn('recruiter_profiles', 'city', {
        type: Sequelize.STRING(255),
        allowNull: true,
      });
    } catch (error) {
      throw new Error(
        'Error in adding city to recruiter_profiles table:',
        error,
      );
    }
  },

  down: async (queryInterface) => {
    try {
      await queryInterface.removeColumn('recruiter_profiles', 'city');
    } catch (error) {
      throw new Error(
        'Error in removing city from recruiter_profiles table:',
        error,
      );
    }
  },
};