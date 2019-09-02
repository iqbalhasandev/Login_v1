// Theme Name:Login_v1
// Theme URI: https://iqbalhasan.gitghub.oi/Login_v1
// Author: IQBA HASAN
// Author URI: https://www.github.com/iqbalhasandev
// Author Social URI: https://www.facebook.com/iqbalhasan.dev
// Description:....
// Version: 1.0 

(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();