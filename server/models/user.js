import { model, Schema, ObjectId } from "mongoose";

const schema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: true,
    },
    name: {
      type: String,
      trim: true,
      default: "",
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      maxLength: 256,
    },
    address: { type: String, default: "" },
    company: { type: String, default: "" },
    phone: { type: String, default: "" },
    photo: {},
    role: {
      type: [String],
      default: ["Buyer"],
      enum: ["Buyer", "Seller", "Admin"],
    },
    enquiredProperties: [{ type: ObjectId, ref: "Ad" }],
    wishlist: [{ type: ObjectId, ref: "Ad" }],
    resetCode: {
        type: String,
        default: "",  // 如果需要默认值为空字符串
      },
  },
  { timestamps: true }
);

export default model("User", schema);