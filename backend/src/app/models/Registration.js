import Sequelize, { Model } from 'sequelize';

class Registration extends Model {
  static init(sequelize) {
    super.init(
      {
          presence: Sequelize.BOOLEAN,
          user_email: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Event, { foreignKey: 'event_id', as: 'event' });
  }
}

export default Registration;
