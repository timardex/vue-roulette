const state = {
    output_number: null,
    text_even_odd: '',
    text_number_color: '',
    text_dozen: '',
    text_low_high: '',
    text_column: '',
    text_racetrack: '',
    ball_effect: new Audio(require('../assets/sounds/ball-effect.mp3')),
    chip_effect: new Audio(require('../assets/sounds/chip-effect.mp3')),
    rotate_ball: 'hide',
    rotate_wheel: 'rotate-right',
    info_list: true,
    show_timer: false,
    button_text: 'Spin it!',
    remove_bet_text: 'Remove Bets',
    remove_bet_btn: false,
    winning_with: [],
    disabled_btn: '',
    disabled_spin: '',
    spin_btn: true,
    last_numbers: [],
    number_checked: [],
    outside_bets: [],
    outside_bets_names: [],
    current_chip: 50,
    chip_ammount_won: null,

    number_zero: [
        {
            id: '0',
            name: '0',
            checked: false,
            numbers: 0,
            color: 'green'
        },
    ],

    number_first_column: [
        {
            id: '1',
            name: '1',
            checked: false,
            numbers: 1,
            color: 'red'
        },
        {
            id: '4',
            name: '4',
            checked: false,
            numbers: 4,
            color: 'black'
        },
        {
            id: '7',
            name: '7',
            checked: false,
            numbers: 7,
            color: 'red'
        },
        {
            id: '10',
            name: '10',
            checked: false,
            numbers: 10,
            color: 'black'
        },
        {
            id: '13',
            name: '13',
            checked: false,
            numbers: 13,
            color: 'black'
        },
        {
            id: '16',
            name: '16',
            checked: false,
            numbers: 16,
            color: 'red'
        },
        {
            id: '19',
            name: '19',
            checked: false,
            numbers: 19,
            color: 'red'
        },
        {
            id: '22',
            name: '22',
            checked: false,
            numbers: 22,
            color: 'black'
        },
        {
            id: '25',
            name: '25',
            checked: false,
            numbers: 25,
            color: 'red'
        },
        {
            id: '28',
            name: '28',
            checked: false,
            numbers: 28,
            color: 'black'
        },
        {
            id: '31',
            name: '31',
            checked: false,
            numbers: 31,
            color: 'black'
        },
        {
            id: '34',
            name: '34',
            checked: false,
            numbers: 34,
            color: 'red'
        },
    ],

    number_second_column: [
        {
            id: '2',
            name: '2',
            checked: false,
            numbers: 2,
            color: 'black'
        },
        {
            id: '5',
            name: '5',
            checked: false,
            numbers: 5,
            color: 'red'
        },
        {
            id: '8',
            name: '8',
            checked: false,
            numbers: 8,
            color: 'black'
        },
        {
            id: '11',
            name: '11',
            checked: false,
            numbers: 11,
            color: 'black'
        },
        {
            id: '14',
            name: '14',
            checked: false,
            numbers: 14,
            color: 'red'
        },
        {
            id: '17',
            name: '17',
            checked: false,
            numbers: 17,
            color: 'black'
        },
        {
            id: '20',
            name: '20',
            checked: false,
            numbers: 20,
            color: 'black'
        },
        {
            id: '23',
            name: '23',
            checked: false,
            numbers: 23,
            color: 'red'
        },
        {
            id: '26',
            name: '26',
            checked: false,
            numbers: 26,
            color: 'black'
        },
        {
            id: '29',
            name: '29',
            checked: false,
            numbers: 29,
            color: 'black'
        },
        {
            id: '32',
            name: '32',
            checked: false,
            numbers: 32,
            color: 'red'
        },
        {
            id: '35',
            name: '35',
            checked: false,
            numbers: 35,
            color: 'black'
        },
    ],

    number_third_column: [
        {
            id: '3',
            name: '3',
            checked: false,
            numbers: 3,
            color: 'red'
        },
        {
            id: '6',
            name: '6',
            checked: false,
            numbers: 6,
            color: 'black'
        },
        {
            id: '9',
            name: '9',
            checked: false,
            numbers: 9,
            color: 'red'
        },
        {
            id: '12',
            name: '12',
            checked: false,
            numbers: 12,
            color: 'red'
        },
        {
            id: '15',
            name: '15',
            checked: false,
            numbers: 15,
            color: 'black'
        },
        {
            id: '18',
            name: '18',
            checked: false,
            numbers: 18,
            color: 'red'
        },
        {
            id: '21',
            name: '21',
            checked: false,
            numbers: 21,
            color: 'red'
        },
        {
            id: '24',
            name: '24',
            checked: false,
            numbers: 24,
            color: 'black'
        },
        {
            id: '27',
            name: '27',
            checked: false,
            numbers: 27,
            color: 'red'
        },
        {
            id: '30',
            name: '30',
            checked: false,
            numbers: 30,
            color: 'red'
        },
        {
            id: '33',
            name: '33',
            checked: false,
            numbers: 33,
            color: 'black'
        },
        {
            id: '36',
            name: '36',
            checked: false,
            numbers: 36,
            color: 'red'
        },
    ],
    column1_numbers: [
        {
            id: '1st',
            name: '1st Column',
            checked: false,
            numbers: [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34],
        }
    ],
    column2_numbers: [
        {
            id: '2nd',
            name: '2nd Column',
            checked: false,
            numbers: [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35],
        }
    ],
    column3_numbers: [
        {
            id: '3rd',
            name: '3rd Column',
            checked: false,
            numbers: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36],
        }
    ],
    cylinder_numbers: [
        {
            id: 'cylinder',
            name: 'Cylinder',
            checked: false,
            numbers: [27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33],
        }
    ],
    orphelin_numbers: [
        {
            id: 'orphelins',
            name: 'Orphelins',
            checked: false,
            numbers: [1, 20, 14, 31, 9, 6, 34, 17],
        }
    ],
    voison_numbers: [
        {
            id: 'voison',
            name: 'Voison',
            checked: false,
            numbers: [22, 18, 29, 7, 28, 12, 35, 3, 26, 0, 32, 15, 19, 4, 21, 2, 25],
        }
    ],
    jeu0_numbers: [
        {
            id: 'jeu0',
            name: 'Jeu 0',
            checked: false,
            numbers: [12, 35, 3, 26, 0, 32, 15],
        }
    ],
    dozen1_numbers: [
        {
            id: 'dozen1',
            name: '1st Dozen',
            checked: false,
            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        },
    ],
    dozen2_numbers: [
        {
            id: 'dozen2',
            name: '2nd Dozen',
            checked: false,
            numbers: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
        },
    ],
    dozen3_numbers: [
        {
            id: 'dozen3',
            name: '3rd Dozen',
            checked: false,
            numbers: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
        },
    ],
    low_numbers: [
        {
            id: '1to18',
            name: '1 to 18',
            checked: false,
            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
        }
    ],
    even_numbers: [
        {
            id: 'even',
            name: 'Even',
            checked: false,
            numbers: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36],
        }
    ],
    red_numbers: [
        {
            id: 'reds',
            name: 'Red',
            checked: false,
            numbers: [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36],
        }
    ],
    black_numbers: [
        {
            id: 'blacks',
            name: 'Black',
            checked: false,
            numbers: [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35],
        }
    ],
    odd_numbers: [
        {
            id: 'odd',
            name: 'Odd',
            checked: false,
            numbers: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35],
        }
    ],
    high_numbers: [
        {
            id: '19to36',
            name: '19 to 36',
            checked: false,
            numbers: [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
        }
    ],
    list_red_numbers: [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36],
    list_black_numbers: [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35],
    list_zero: [0],
    list_cylinder_numbers: [27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33],
    list_orphelin_numbers: [1, 20, 14, 31, 9, 6, 34, 17],
    list_voison_numbers: [22, 18, 29, 7, 28, 12, 35, 3, 26, 0, 32, 15, 19, 4, 21, 2, 25],
    list_jeu0_numbers: [12, 35, 3, 26, 0, 32, 15],
    list_dozen_1_numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    list_dozen_2_numbers: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    list_dozen_3_numbers: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
    list_first_column_numbers: [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34],
    list_second_column_numbers: [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35],
    list_third_column_numbers: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36],
    list_even_numbers: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36],
    list_odd_numbers: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35],
    list_numbers_1_to_18: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    list_numbers_19_to_36: [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
}

export default state;