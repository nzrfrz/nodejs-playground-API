export const Medicines = (mongoose) => {
    const schema = mongoose.Schema(
        {
            name: String,
            manufacturer: String,
            dosage: String,
            quantity: Number,
            price: String,
            author: Object,
        },
        {
            timestamps: true
        }
    );

    schema.virtual('id').get(function () {
        return this._id.toHexString();
    });

    schema.set('toJSON', {
        virtuals: true,
        versionKey: false,
        transform: function (doc, ret) { 
            delete ret._id;
        }
    });

    const Medicines = mongoose.model("medicines", schema);
    return Medicines;
};