const express = require("express");

const fetch = require("node-fetch");

const router = express.Router();

const SERVER_KEY =
  "AAAAndC77KE:APA91bEJ-w3kO-8VSJpy3TYqxacsti9eNL2QgBFAiy3q55YyHTH8YueFsKAwgo4sGXrl31kac4n2UpYILYWXQi-Y1LR8hwZ_lJa0z6dmGxO2PGyijSdsLUUS4NFquwq9WrQF6vZSsLte";

router.post("/send", (req, res) => {
  var notification = {
    title: "Testujemy",
    text: "To jest wiadomość testowa",
  };

  var fcm_tokens = [
    "cNhwt7ZqTZq7N22XwtcDD0:APA91bEYnNQK7vpqxnbUO4Kp1LI5LuSPA4CBoAtRX5jBTjzXAqpHkLW9qHRccZsyxw00HYCKOuZAxXJVi6LCzLeeH-so9W4Rh9x9dzcr2qJSetvOyBDrlpXvK6F5M1IBhfgHuEi6GFQ0",
  ];

  var notification_body = {
    notification: notification,
    registration_ids: fcm_tokens,
  };

  fetch("https://fcm.googleapis.com/fcm/send", {
    method: "POST",
    headers: {
      Authorization: "key=" + SERVER_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(notification_body),
  })
    .then(() => {
      res.status(200).send("Push poszedł");
    })
    .catch((err) => {
      res.status(400).send("Wystąpił błąd");
      console.log(err);
    });
});

module.exports = router;
