var app = angular.module('app')
    .run(['Pubnub','currentUser', function(Pubnub, currentUser) {

        Pubnub.init({
            publish_key: 'pub-c-eb607328-83ff-42f7-85a4-7fb6f5866dcc',
            subscribe_key: 'sub-c-01b9257c-c3c4-11e7-83f0-6e80f1f24680',
            uuid: currentUser,
            origin: 'pubsub.pubnub.com',
            ssl: true,
            heartbeat: 40,
            heartbeat_interval: 60
        });

    }])
    app.run(['ngNotify', function(ngNotify) {

        ngNotify.config({
            theme: 'paster',
            position: 'top',
            duration: 250
        });

    }]);
