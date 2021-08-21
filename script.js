paypal.Buttons({
    style: {
        color: 'blue',
        shape: 'pill'
    },
        createOrder: function(data, actions) {
        console.log('DATA' + data);
        console.log('Actions:' + data);
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '99.9'
                }
            }]
        })
    },
    onApprove: function(data, actions) {
        console.log('DATA' + data);
        console.log('Actions:' + data);
        return actions.order.capture().then(function(details){
            console.log(details.payer.name.given_name);
            window.location.replace('success_page.html')
        })
    },
    onCancel: function(data) {
        window.location.replace('onCancel.html')
    }


}).render('#paypal-payment-button');
