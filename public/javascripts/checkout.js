
const $form = $('#checkout-form');

$form.submit(function(event) {
    $('#charge-error').addClass('invisible');
    $form.find('button').prop('disabled', true);
    return false;
});

