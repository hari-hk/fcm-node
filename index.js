FCM = require('fcm-node');

const SERVER_API_KEY = 'PUT_YOUR_SERVER_API_KEY'; //put your api key here
const DEVICE_TOKEN = 'PUT_YOUR_DEVICE_TOKEN'; //put a device token here

const fcm = new FCM(SERVER_API_KEY);

// message only payload
const payload = {
  to: DEVICE_TOKEN,
  data: {
    url: 'news',
    foo: 'fooooooooooooo',
    bar: 'bar bar bar',
    main_picture: 'https://picsum.photos/300/200',
  },
  priority: 'high',
  content_available: true,
  notification: {
    title: 'Npai Testing Title',
    body: 'Testing body!',
    image: 'https://picsum.photos/300/200',
    sound: 'default',
    badge: '1',
  },
};

// message with image
const payload2 = {
  data: {
    image: 'https://picsum.photos/300/200',
    message: 'Firebase Push Message Using API',
    AnotherActivity: 'True',
  },
  to: DEVICE_TOKEN,
};

const callbackLog = (message, err, res) => {
  console.log('MESSAGE:::' + message);
  console.log('ERR:::' + err);
  console.log('RES:::' + res);
};

const sendMessage = () => {
  fcm.send(payload2, (err, res) => callbackLog('Mesage Send', err, res));
};

sendMessage();
