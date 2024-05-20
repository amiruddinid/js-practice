import { v2 as cloudinary } from 'cloudinary';

const {CLOUD_NAME, API_KEY, API_SECRET} = process.env

cloudinary.config({ 
  cloud_name: 'ddgwlh6cp', 
  api_key: '941885198952221', 
  api_secret: 'gc-xJFcPJsNML8LYU2x2bMq73GQ' 
});

export default cloudinary;