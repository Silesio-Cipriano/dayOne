import { v2 as cloudinary } from 'cloudinary';

export default {
  async cloudinaryUpload(avatarFile: string) {
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.CLOUD_API_KEY,
      api_secret: process.env.CLOUD_API_SECRET,
      secure: true,
    });

    const { url } = await cloudinary.uploader.upload(
      `./tmp/avatar/${avatarFile}`,
      {
        folder: 'DayOne/Avatar',
      }
    );

    return url;
  },
};
