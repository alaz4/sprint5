import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error('MONGODB_URI ortam değişkeni bulunamadı!');
    }
    await mongoose.connect(uri);
    console.log('MongoDB bağlandı (Atlas)');
  } catch (error) {
    console.error('MongoDB bağlantı hatası:', error);
    process.exit(1);
  }
};