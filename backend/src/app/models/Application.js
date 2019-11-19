import Sequelize, { Model } from 'sequelize';

class Application extends Model {
  static init(sequelize) {
    super.init(
      {

      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Event, { foreignKey: 'event_id', as: 'event' });
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

export default Application;
