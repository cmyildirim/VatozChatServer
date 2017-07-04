module.exports = function(app) {
  const validatePattern = require('../utils/validate-pattern');
  const mongooseClient = app.get("mongooseClient");
  const Schema = mongooseClient.Schema;
  const settings = new Schema({
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      validate: validatePattern("isTitle")
    },
    value: {
      type: Schema.Types.Mixed,
      required: true
    }
  });
  return mongooseClient.model('settings', settings);
};
