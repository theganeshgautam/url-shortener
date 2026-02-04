// import mongoose from "mongoose";

// const urlSchema = new mongoose.Schema(
//   {
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     originalUrl: {
//       type: String,
//       required: true,
//     },
//     shortId: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     clicks: {
//       type: Number,
//       default: 0,
//     },
//   },
//   { timestamps: true }
// );

// const Url = mongoose.model("Url", urlSchema);

// export default Url;








const urlSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true
    },
    originalUrl: {
      type: String,
      required: true,
      index: true // optional but good
    },
    shortId: {
      type: String,
      required: true,
      unique: true,
      index: true
    },
    clicks: {
      type: Number,
      default: 0,
    },
    accessLogs: [
      {
        timestamp: { type: Date, default: Date.now }
      }
    ]
  },
  { timestamps: true }
);
