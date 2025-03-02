import Admin from '../models/admin.js';

export const loginAdmin = async (request, response) => {
  try {
    console.log('Request Headers:', request.headers);;
    const { admin, password } = request.body;
    console.log('Admin:', admin);
    console.log('Password:', password);
    console.log('Querying admin record...');
    const adminRecord = await Admin.findOne({ admin: admin });

    console.log('Admin Record:', adminRecord);

    if (!adminRecord) {
      console.error('Admin does not exist');
      return response.status(400).json({ msg: 'Admin does not exist' });
    }

    if (adminRecord.password !== password) {
      console.error('Password does not match');
      return response.status(400).json({ msg: 'Password does not match' });
    }

    return response.status(200).json({ msg: 'Login successful' });

  } catch (error) {
    console.error('Error during admin login:', error);
    return response.status(500).json({ msg: 'Error while admin logging in' });
  }
};
