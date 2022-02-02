module.exports = (mongoose) => {
   var schema = mongoose.Schema({
      tab: String,
      description: String,
      published: Boolean,
      product: [
         {
            title: String,
            price: Number,
            image: String,
            discraption: String,
         },
      ],
   });

   schema.method('toJSON', function () {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
   });

   const Items = mongoose.model('item', schema);
   return Items;
};
