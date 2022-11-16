import mongoose from 'mongoose';
import { PORT } from './constants';
import * as dotenv from 'dotenv';

import * as serverService from './services/server.service';

dotenv.config();

(async () => {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.DEV_USERNAME}:${process.env.PASSWORD}@${process.env.CLASTER_INFO}.mongodb.net/managerApp`);
    serverService.server.listen(process.env.PORT || PORT, function () {
      console.log('Сервер ожидает подключения...');
    })
  } catch (error) {
    console.log(error);
  }
})();



process.on('SIGINT', async () => {
  await mongoose.disconnect();
  process.exit();
});
