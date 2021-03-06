$(function () {

    // $.site('disable console'); // disables window.console functionality
    // $.site('enable console'); // re-enables window.console functionality


    // $.site('enable debug');

// // disable all debug
//     $.site('enable debug');


    // normalizes console and requestAnimationFrame DOM methods
    $.site('normalize');
    
    $('.ui.marks-checkbox').dropdown({
        action: 'nothing'
    });

    /*
    $.fn.checkbox.settings = {
        debug:true
    };
    $.fn.dropdown.settings = {
        debug:true
    };*/


    var loginForm = $(".login-form-modal");
    var phoneAdd = $("#phone-add");
    var offerAdd = $('#offer-add');
    var offerEdit = $('.offer-edit-btn');
    var offerDelete = $('.offer-delete-btn');
    var billingEdit = $('.billing-edit');
    var emailEdit = $('#email-edit');
    var passwordEdit = $('#password-edit');
    
    loginForm.click(function () {
        $('.login-form')
            .modal('show')
        ;
    });
    
    billingEdit.click(function () {
        $('.billing-edit')
            .modal('show')
        ;
    });

    emailEdit.click(function () {
        $('.email-edit')
            .modal('show')
        ;
    });

    passwordEdit.click(function () {
        $('.password-edit')
            .modal('show')
        ;
    });

    phoneAdd.click(function () {
        $('.phone-add')
            .modal('show')
        ;
    });


    $('.ui.checkbox').checkbox();

    
    offerAdd.click(function () {
        $('.offer-add')
            .modal('show')
        ;
    });

    offerEdit.click(function () {
        $('.offer-edit')
            .modal('show')
        ;
    });

    offerDelete.click(function () {
        $('.offer-delete')
            .modal('show')
        ;
    });
    
    $('.ui.accordion').accordion('refresh');
    $('.login-dropdown').dropdown();
    
    $('.ui.dropdown').dropdown();
    
    var items = $('#v-nav>ul>li').each(function () {
        $(this).click(function () {
            //remove previous class and add it to clicked tab
            items.removeClass('current');
            $(this).addClass('current');
            $('#v-nav>div.tab-content').hide().eq(items.index($(this))).show();

            window.location.hash = $(this).attr('tab');
        });
    });

    if (location.hash) {
        tab = location.hash.substring(1);
        counter = tab.substring(3)-1;
        
        showTab(tab, counter);
    }
    else {
        showTab("tab1",0);
    }

    function showTab(tab, counter) {
        var tabContents = $('#v-nav>div.tab-content');
        
        $("[tab="+tab+"]").addClass('current');
        tabContents.hide();
        tabContents.eq(counter).show();
    }
});

