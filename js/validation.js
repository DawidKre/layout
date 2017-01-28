$(function () {

    $( '#offer-form' )
        .form( {
            fields: {
                name: {
                    identifier: 'name',
                    rules: [
                        {
                            type: 'empty',
                            prompt: 'Podaj nazwe oferty'
                        }
                    ]
                },
                marks: {
                    identifier: 'marks',
                    rules: [
                        {
                            type: 'minCount[2]',
                            prompt: 'Wybierz conajmniej dwie marki'
                        }
                    ]
                },
                phone: {
                    identifier: 'phone',
                    rules: [
                        {
                            type: 'empty',
                            prompt: 'Podaj numer telefonu'
                        }
                    ]
                },
                adress: {
                    identifier: 'adress',
                    rules: [
                        {
                            type: 'empty',
                            prompt: 'Podaj adres'
                        }
                    ]
                },
                adressCode: {
                    identifier: 'adress-code',
                    rules: [
                        {
                            type: 'empty',
                            prompt: 'Podaj adres'
                        },
                        {
                            type: 'number',
                            prompt: 'Zły format liczby'
                        }
                    ]
                },
                localization: {
                    identifier: 'localization',
                    rules: [
                        {
                            type: 'empty',
                            prompt: 'Wybierz lokalizacje'
                        }
                    ]
                },
                zip: {
                    identifier: 'zip',
                    rules: [
                        {
                            type: 'empty',
                            prompt: 'Wpisz kod pocztowy'
                        }
                    ]
                },
                city: {
                    identifier: 'city',
                    rules: [
                        {
                            type: 'empty',
                            prompt: 'Wpisz miejscowość'
                        }
                    ]
                },
                categories: {
                    identifier: 'categories',
                    rules: [
                        {
                            type: 'minCount[1]',
                            prompt: 'Wybierz conajmniej jedną kategorie'
                        }
                    ]
                },
                description: {
                    identifier: 'description',
                    rules: [
                        {
                            type: 'empty',
                            prompt: 'Wpisz opis firmy'
                        }
                    ]
                }
            },
            inline: true,
            on: 'submit'
        } )
    ;
} );
