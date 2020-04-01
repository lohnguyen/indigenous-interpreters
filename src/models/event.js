const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    summary: {
        type: String,
        trim: true,
        required: true
    },
    location: {
        type: String,
        trim: true,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: new Date()
    },
    image: {
        url: {
            type: String,
        },
        buffer: {
            type: Buffer
        }
    }
})

eventSchema.methods.toJSON = function () {
    const event = this
    const eventObject = event.toObject()

    eventObject.id = eventObject._id
    eventObject.image = eventObject.image.url
    delete eventObject.__v
    delete eventObject._id

    return eventObject
}

const Event = mongoose.model('Event', eventSchema)

module.exports = Event