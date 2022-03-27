package com.miglanc.PushNotificationTestApp

import android.util.Log
import com.google.firebase.messaging.FirebaseMessagingService

class MyFirebaseMessangingService : FirebaseMessagingService() {

    override fun onNewToken(token: String) {
        super.onNewToken(token)

    }
}