export const CorporateInfo = (mongoose) => {
    const schema = mongoose.Schema(
        {
            personalName: String,
            position: String,
            dateOfBirth: String,
            gender: String,
            personalAddress: String,
            personalProvince: String,
            personalRegency: String,
            personalSubDistrict: String,
            personalVillage: String,
            personalEmail: String,
            personalNumber: String,
            userName: String,
            password: String,
            corporateName: String,
            corporateSector: String,
            businessScale: String,
            officeEmail: String,
            officeNumber: String,
            officeAddress: String,
            province: String,
            regency: String,
            subDistrict: String,
            village: String,
            postalCode: String,
            contractActiveStartDate: String,
            contractActiveEndDate: String,
            contractValue: String,
            channelDeals: Array
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