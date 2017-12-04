var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PrivacyPolicySchema = new mongoose.Schema({

    title: String,
    body: String,
    dateMade: {
        type: Date,
        default: Date.now()
    },
    
});
const PrivacyPolicy = module.exports = mongoose.model('PrivacyPolicy', PrivacyPolicySchema);
module.exports.updatePP = function(bodyText, callback){
  console.log(bodyText)
  PrivacyPolicy.findOneAndUpdate({ "title" : "New privacy policy" }, { $set : { "body" : bodyText }}, {new: true}, (err, user)=>{
    if(err) console.log("err user " + err );
    
    console.log("user " + user );
  });
}