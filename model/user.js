import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// how our document look like
const userSchema = mongoose.Schema({
    staffname:{
        type: String,
        required: true
    },
    
    maintainencenumber:{
        type: String,
        required: true
    },
    
    staffsection:{
        type: String,
        required: true
    },
    
    roomnumber:{
        type: String,
        required: true
    },
    
    map:{
        type: String,
        required: true
    }
    
    }, {timestamps: true})
;

autoIncrement.initialize(mongoose.connection);
/*Model.find().then((data) => {
    console.log(data);
   ....
   })*/
//userSchema.plugin(autoIncrement.plugin, 'user');
// we need to turn it into a model
const postUser = mongoose.model('user', userSchema);

export default postUser;