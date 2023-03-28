export const CorporateInfo = (mongoose) => {
    const schema = mongoose.Schema(
        {
            personInChargeInfo: Object,
            corporateInfo: Object,
            contractInfo: Object
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

    const Corporate = mongoose.model("corporate_info", schema);
    return Corporate;
};