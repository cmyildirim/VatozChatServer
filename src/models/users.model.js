// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const Schema = mongooseClient.Schema;
  const validatePattern = require('../utils/validate-pattern');
  const users = new mongooseClient.Schema({
    avatar: {type:String},  
    name: {type: String, required: true},
    image: {type: String},
    email: {type: String, unique: true},
    password: { type: String },
  
  
    //facebookId: { type: String },
  
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    
    //from vue
    bitbucketId: { type: String },
    bitbucket: { type: Schema.Types.Mixed },
    dropboxId: { type: String },
    dropbox: { type: Schema.Types.Mixed },
    facebookId: { type: String },
    facebook: { type: Schema.Types.Mixed },
    githubId: { type: String },
    github: { type: Schema.Types.Mixed },
    googleId: { type: String },
    google: { type: Schema.Types.Mixed },
    instagramId: { type: String },
    instagram: { type: Schema.Types.Mixed },
    linkedinId: { type: String },
    linkedin: { type: Schema.Types.Mixed },
    paypalId: { type: String },
    paypal: { type: Schema.Types.Mixed },
    spotifyId: { type: String },
    spotify: { type: Schema.Types.Mixed },
    // email: {type: String, required: true, unique: true},
    // password: { type: String, required: true },
    // name: { type: String, required: false },
  
    isEnabled: {
      type: Boolean,
      'default': true
    },
  
    role: {
      required: true,
      type: String,
      trim: true,
      validate: validatePattern('isTitle')
    },
  
    // color: {
    //   required: false,
    //   type: String,
    //   trim: true,
    //   enum: colors,
    //   default: function() {
    //     return colors[Math.floor(Math.random()*colors.length)]
    //   }
    // },
  
    // createdAt: { type: Date, 'default': Date.now },
    // updatedAt: { type: Date, 'default': Date.now },
  
    isVerified: { type: Boolean },
    verifyToken: { type: String },
    verifyExpires: { type: Date }, // or a long integer
    verifyChanges: { type: Object }, // an object (key-value map), e.g. { field: "value" }
    resetToken: { type: String },
    resetExpires: { type: Date } // or a long integer

    //from vue END
  });

  return mongooseClient.model('users', users);
};
