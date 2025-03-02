import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  admin: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Admin = mongoose.model('Admin', adminSchema);

export default Admin;
