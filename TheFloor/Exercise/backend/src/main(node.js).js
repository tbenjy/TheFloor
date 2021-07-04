const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const customerSchema = mongoose.Schema(
    {
        _id: Number,
        firstName: {type: String, required: true, maxLength: 10},
        lastName: {type: String, required: true, maxLength: 10},
        city: {type: String, required: true, maxLength: 15},
        address: {type: String, required: true, maxLength: 30},
        phone: {type: String, required: true, maxLength: 10}
    },
    {
        autoCreate: true,
        _id: false
    });
customerSchema.plugin(AutoIncrement);

const customer = mongoose.model('Customer', customerSchema);

async function main() {
    await mongoose.connect(
        'mongodb+srv://thefloor:thefloor@thefloor.kxtk9.mongodb.net/TheFloor?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        }
    );
    await mongoose.disconnect();
}

main().catch(console.error);