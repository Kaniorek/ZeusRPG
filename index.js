const _0x13e4 = ['setFooter', 'length', 'createdAt', 'png', '\' WHERE did=\'', 'shift', './config/config.js', 'split', 'then', '11274QVfCLc', 'B\u0142\u0105d: Poda\u0142e\u015B zbyt du\u017Co argument\xF3w (Maksymanlnie: 1)', 'Błąd: Podana wartość nie jest cyfrą: ', 'createConnection', 'STREAMING', '67174fCstXJ', '601906pvkPHG', 'user', '207413RIMjvM', 'gamedig', 'Rozpoczęto proces ', 'warn', 'delete', 'Błąd: Brak argumentu (Podaj wartość: Kod weryfikacyjny)', '388966PggNNG', 'Nieprawidłowa komenda!', 'custom', ' minut\x0AIlość pieniędzy w banku: ', 'Błąd: Nie ma takiego kodu w bazie danych!', 'trim', 'setTitle', 'send', 'log', 'UPDATE discord_connect SET avatarurl=\'', 'Twoje konto discord jest już połączone z innym kontem MTA!', 'Odświeżenie avataru nieudane!', 'add', 'setColor', ' avatar mozesz nadpisywać co godzine!', 'INSERT INTO pystories_vehicles (model,ownedPlayer,mileage,registered,parking,engine) VALUES (', '296456RvnFcr', '\x0AW nagrodę otrzymujesz dodatkowo: ', 'Login: ', 'online', 'setActivity', 'Błąd: Avatar możesz odświeżać jedynie poprzez wiadomość prywatną z botem!', '.\x0AAby ujrze\u0107 sw\xF3j avatar i pozby\u0107 si\u0119 znaku wodnego u g\xF3ry\x0Aekranu, nale\u017Cy zrobi\u0107 reconnect!', 'setTimestamp', 'https://zeusrpg.mtasa.eu', 'Error. Nie znaleziono takiego serwera!', 'mtasa', '\x0AZ kontem mta o serialu ', 'avatarurl', 'Błąd: Łączyć konto możesz jedynie poprzez wiadomość prywatną z botem!', 'Informacje o graczu o SID: ', 'channel', 'displayAvatarURL', 'tag', 'SELECT * FROM discord_connect WHERE sid=', 'auto', ' godzin ', 'bot', 'To konto MTA jest podłączone z kontem discord', 'info', ',discordconnected=\'TAK\' WHERE kod=\'', 'Wystąpił błąd', 'SELECT * FROM pystories_users WHERE kod=\'', 'bank_money', 'slice', 'red', 'B\u0142\u0105d: Ta komenda mo\u017Ce by\u0107 u\u017Cyta tylko i wy\u0142\u0105czne na wsp\xF3\u0142prace!', 'register_serial', 'Udało ci się połączyć konto discord o ID ', 'maxplayers', 'SELECT * FROM pystories_users WHERE id=', 'message', '1bTqfyi', 'ready', 'setDescription', '59995BQxbpg', 'startsWith', 'discordconnected', 'login', ',0,\'true\',1,\'diesel\')', 'Informacje o bocie', ' zanim wyślesz następną komendę odczekaj 10 sekund!', 'INSERT INTO discord_connect (did,sid,serial,avatarurl) VALUES (\'', '7peYUaY', 'PLN\x0AKonto połączone z discordem: ', 'kasa', '\',\'', 'trunc', 'SELECT * FROM discord_connect WHERE did=\'', 'raw', 'Taka komenda nie istnieje! Wpisz !help.', 'debug', 'author', 'help', 'numplayers', '\x0ACzas spędzony: ', '\x0A \x0A ', 'content', 'Połączenie nieudane!', 'query', 'has', 'username', 'Wykonano przez: ', 'UPDATE pystories_users SET bank_money=bank_money+', 'hours', 'reply', 'Bot nie działa tu tylko na kanale komendy!', 'Cooldown', 'Odświeżenie udane!', 'https://cdn.discordapp.com/attachments/764573595640528976/786229187303571466/unknown.png'];
const _0x53af = function (_0xf536x3, _0xf536x4) {
    _0xf536x3 = _0xf536x3 - 0x14b;
    let _0xf536x5 = _0x13e4[_0xf536x3];
    return _0xf536x5
};
const _0x5456c7 = _0x53af;
(function (_0xf536x7, _0xf536x8) {
    const _0xf536x9 = _0x53af;
    while (!![]) {
        try {
            const _0xf536xa = parseInt(_0xf536x9(0x173)) * parseInt(_0xf536x9(0x1a7)) + -parseInt(_0xf536x9(0x16a)) + parseInt(_0xf536x9(0x183)) + parseInt(_0xf536x9(0x1b2)) * parseInt(_0xf536x9(0x1aa)) + -parseInt(_0xf536x9(0x165)) + -parseInt(_0xf536x9(0x16d)) + -parseInt(_0xf536x9(0x16b));
            if (_0xf536xa === _0xf536x8) {
                break
            } else {
                _0xf536x7['push'](_0xf536x7['shift']())
            }
        } catch (_0x4656b5) {
            _0xf536x7['push'](_0xf536x7['shift']())
        }
    }
}(_0x13e4, 0x35214));
const {
    Client
    , MessageEmbed
} = require('discord.js'), chalk = require('chalk'), Gamedig = require(_0x5456c7(0x16e)), {
    kanalkomend
    , kanalwspolprac
    , dbhost
    , dbport
    , dbuser
    , dbpass
    , dbname
    , activitytype
    , activity
    , statushost
    , statusport
    , typnagrody
    , modelauta
    , nagrodailosc
    , token
    , prefix
} = require(_0x5456c7(0x162)), client = new Client(), talkedRecently = new Set(), antyavatar = new Set(), mysql = require('mysql'), con = mysql[_0x5456c7(0x168)]({
    'host': dbhost
    , 'port': dbport
    , 'user': dbuser
    , 'password': dbpass
    , 'database': dbname
});
 
function getPlayers() {
    const _0xf536x13 = _0x5456c7;
    activitytype === _0xf536x13(0x186) && Gamedig[_0xf536x13(0x151)]({
        'type': _0xf536x13(0x18d)
        , 'host': statushost
        , 'port': statusport
    })[_0xf536x13(0x164)]((_0xf536x16) => {
        const _0xf536x17 = _0xf536x13;
        client['user'][_0xf536x17(0x187)](activity + ' ' + _0xf536x16[_0xf536x17(0x1b8)][_0xf536x17(0x14c)] + '/' + _0xf536x16[_0xf536x17(0x1a4)], {
            'type': 'STREAMING'
            , 'url': _0xf536x17(0x18b)
        })
    })['catch']((_0xf536x14) => {
        const _0xf536x15 = _0xf536x13;
        console[_0xf536x15(0x17b)](_0xf536x15(0x18c))
    }), activitytype === _0xf536x13(0x175) && client[_0xf536x13(0x16c)][_0xf536x13(0x187)]('' + activity, {
        'type': _0xf536x13(0x169)
        , 'url': _0xf536x13(0x18b)
    })
}
client['on'](_0x5456c7(0x1a8), () => {
    const _0xf536x18 = _0x5456c7;
    console[_0xf536x18(0x17b)](chalk[_0xf536x18(0x1a0)](_0xf536x18(0x16f) + client[_0xf536x18(0x16c)][_0xf536x18(0x194)] + '!')), setInterval(function () {
        getPlayers()
    }, 0x7530)
}), client['on'](_0x5456c7(0x1a6), (_0xf536x19) => {
    const _0xf536x1a = _0x5456c7
        , {
            author: _0x5781a5
            , guild: _0x12cb57
        } = _0xf536x19;
    if (_0x5781a5[_0xf536x1a(0x198)]) {
        return
    };
    if (!_0xf536x19['content'][_0xf536x1a(0x1ab)](prefix)) {
        return
    };
    const _0xf536x1b = _0xf536x19[_0xf536x1a(0x14f)][_0xf536x1a(0x19f)](prefix[_0xf536x1a(0x15d)])[_0xf536x1a(0x178)]()[_0xf536x1a(0x163)](/ +/g)
        , _0xf536x1c = _0xf536x1b[_0xf536x1a(0x161)]()['toLocaleLowerCase']();
    if (talkedRecently[_0xf536x1a(0x152)](_0xf536x19['author']['id'])) {
        const _0xf536x1d = new MessageEmbed()['setTitle']('Cooldown')['setColor'](0xff0000)[_0xf536x1a(0x1a9)]('@' + _0xf536x19['author'][_0xf536x1a(0x194)] + _0xf536x1a(0x1b0))[_0xf536x1a(0x15c)](_0xf536x1a(0x154) + _0xf536x19[_0xf536x1a(0x1bb)][_0xf536x1a(0x194)])[_0xf536x1a(0x18a)](_0xf536x19[_0xf536x1a(0x15e)]);
        _0xf536x19['channel'][_0xf536x1a(0x17a)](_0xf536x1d);
        return
    } else {
        talkedRecently['add'](_0xf536x19[_0xf536x1a(0x1bb)]['id']), setTimeout(() => {
            const _0xf536x1e = _0xf536x1a;
            talkedRecently[_0xf536x1e(0x171)](_0xf536x19[_0xf536x1e(0x1bb)]['id'])
        }, 0x2710)
    };
    if (_0xf536x1c === 'polacz') {
        if (_0x12cb57) {
            const _0xf536x1f = new MessageEmbed()[_0xf536x1a(0x179)](_0xf536x1a(0x19c))[_0xf536x1a(0x180)](0xff0000)[_0xf536x1a(0x1a9)](_0xf536x1a(0x190))[_0xf536x1a(0x15c)](_0xf536x1a(0x154) + _0xf536x19[_0xf536x1a(0x1bb)][_0xf536x1a(0x194)])[_0xf536x1a(0x18a)](_0xf536x19[_0xf536x1a(0x15e)]);
            _0xf536x19['delete'](_0xf536x19), _0xf536x19[_0xf536x1a(0x192)][_0xf536x1a(0x17a)](_0xf536x1f);
            return
        };
        if (_0xf536x1b[0x0] === undefined) {
            const _0xf536x20 = new MessageEmbed()[_0xf536x1a(0x179)](_0xf536x1a(0x19c))[_0xf536x1a(0x180)](0xff0000)[_0xf536x1a(0x1a9)](_0xf536x1a(0x172))[_0xf536x1a(0x15c)](_0xf536x1a(0x154) + _0xf536x19[_0xf536x1a(0x1bb)][_0xf536x1a(0x194)])[_0xf536x1a(0x18a)](_0xf536x19[_0xf536x1a(0x15e)]);
            _0xf536x19['channel']['send'](_0xf536x20);
            return
        };
        if (_0xf536x1b[0x1] !== undefined) {
            const _0xf536x21 = new MessageEmbed()['setTitle'](_0xf536x1a(0x19c))['setColor'](0xff0000)[_0xf536x1a(0x1a9)](_0xf536x1a(0x166))[_0xf536x1a(0x15c)]('Wykonano przez: ' + _0xf536x19[_0xf536x1a(0x1bb)][_0xf536x1a(0x194)])[_0xf536x1a(0x18a)](_0xf536x19[_0xf536x1a(0x15e)]);
            _0xf536x19['channel'][_0xf536x1a(0x17a)](_0xf536x21);
            return
        };
        con['query'](_0xf536x1a(0x19d) + _0xf536x1b[0x0] + '\'', (_0xf536x22, _0xf536x23) => {
            const _0xf536x24 = _0xf536x1a;
            if (_0xf536x22) {
                throw _0xf536x22
            };
            if (_0xf536x23['length'] < 0x1) {
                const _0xf536x25 = new MessageEmbed()['setTitle'](_0xf536x24(0x150))[_0xf536x24(0x180)](0xff0000)[_0xf536x24(0x1a9)](_0xf536x24(0x177))[_0xf536x24(0x15c)](_0xf536x24(0x154) + _0xf536x19[_0xf536x24(0x1bb)]['tag'])[_0xf536x24(0x18a)](_0xf536x19['createdAt']);
                _0xf536x19[_0xf536x24(0x192)][_0xf536x24(0x17a)](_0xf536x25);
                return
            };
            con[_0xf536x24(0x151)]('SELECT * FROM discord_connect WHERE serial=\'' + _0xf536x23[0x0][_0xf536x24(0x1a2)] + '\'', (_0xf536x26, _0xf536x27) => {
                const _0xf536x28 = _0xf536x24;
                if (_0xf536x26) {
                    throw _0xf536x26
                };
                con['query'](_0xf536x28(0x1b7) + _0xf536x19['author']['id'] + '\'', (_0xf536x29, _0xf536x2a) => {
                    const _0xf536x2b = _0xf536x28;
                    if (_0xf536x29) {
                        throw _0xf536x29
                    };
                    if (_0xf536x2a[_0xf536x2b(0x15d)] >= 0x1) {
                        if ('' + _0xf536x2a[0x0]['did'] === '' + _0xf536x19[_0xf536x2b(0x1bb)]['id']) {
                            const _0xf536x2c = new MessageEmbed()['setTitle'](_0xf536x2b(0x150))[_0xf536x2b(0x180)](0xff0000)[_0xf536x2b(0x1a9)](_0xf536x2b(0x17d))['setFooter'](_0xf536x2b(0x154) + _0xf536x19[_0xf536x2b(0x1bb)][_0xf536x2b(0x194)])[_0xf536x2b(0x18a)](_0xf536x19[_0xf536x2b(0x15e)]);
                            _0xf536x19['channel']['send'](_0xf536x2c);
                            return
                        }
                    };
                    if (_0xf536x27['length'] >= 0x1) {
                        const _0xf536x2d = new MessageEmbed()[_0xf536x2b(0x179)](_0xf536x2b(0x150))[_0xf536x2b(0x180)](0xff0000)[_0xf536x2b(0x1a9)](_0xf536x2b(0x199))['setFooter'](_0xf536x2b(0x154) + _0xf536x19[_0xf536x2b(0x1bb)][_0xf536x2b(0x194)])[_0xf536x2b(0x18a)](_0xf536x19[_0xf536x2b(0x15e)]);
                        _0xf536x19[_0xf536x2b(0x192)][_0xf536x2b(0x17a)](_0xf536x2d);
                        return
                    };
                    if (_0xf536x27[_0xf536x2b(0x15d)] < 0x1) {
                        const _0xf536x2e = new MessageEmbed()[_0xf536x2b(0x179)]('Połączono konto!')[_0xf536x2b(0x180)](0xfe7f00)['setDescription'](_0xf536x2b(0x1a3) + _0xf536x19[_0xf536x2b(0x1bb)]['id'] + _0xf536x2b(0x18e) + _0xf536x23[0x0]['register_serial'] + _0xf536x2b(0x184) + typnagrody + _0xf536x2b(0x189))[_0xf536x2b(0x15c)](_0xf536x2b(0x154) + _0xf536x19[_0xf536x2b(0x1bb)][_0xf536x2b(0x194)])[_0xf536x2b(0x18a)](_0xf536x19[_0xf536x2b(0x15e)]);
                        _0xf536x19['channel']['send'](_0xf536x2e), con['query'](_0xf536x2b(0x1b1) + _0xf536x19['author']['id'] + _0xf536x2b(0x1b5) + _0xf536x23[0x0]['id'] + _0xf536x2b(0x1b5) + _0xf536x23[0x0][_0xf536x2b(0x1a2)] + '\',\'' + _0xf536x19[_0xf536x2b(0x1bb)][_0xf536x2b(0x193)]({
                            'format': 'png'
                            , 'size': 0x200
                        }) + '\')', (_0xf536x2f, _0xf536x30) => {
                            if (_0xf536x2f) {
                                throw _0xf536x2f
                            };
                            return
                        }), typnagrody === _0xf536x2b(0x1b4) && con['query'](_0xf536x2b(0x155) + nagrodailosc + _0xf536x2b(0x19b) + _0xf536x1b[0x0] + '\'', (_0xf536x31, _0xf536x32) => {
                            if (_0xf536x31) {
                                throw _0xf536x31
                            };
                            return
                        }), typnagrody === _0xf536x2b(0x196) && con[_0xf536x2b(0x151)](_0xf536x2b(0x19d) + _0xf536x1b[0x0] + '\'', (_0xf536x33, _0xf536x34) => {
                            const _0xf536x35 = _0xf536x2b;
                            if (_0xf536x33) {
                                throw _0xf536x33
                            };
                            con[_0xf536x35(0x151)](_0xf536x35(0x182) + modelauta + ',' + _0xf536x34[0x0]['id'] + _0xf536x35(0x1ae), (_0xf536x36, _0xf536x37) => {
                                if (_0xf536x36) {
                                    throw _0xf536x36
                                };
                                return
                            })
                        })
                    }
                })
            })
        });
        return
    };
    if (_0xf536x1c === 'avatar') {
        if (_0x12cb57) {
            const _0xf536x38 = new MessageEmbed()[_0xf536x1a(0x179)]('Wystąpił błąd')[_0xf536x1a(0x180)](0xff0000)['setDescription'](_0xf536x1a(0x188))[_0xf536x1a(0x15c)](_0xf536x1a(0x154) + _0xf536x19['author']['tag'])['setTimestamp'](_0xf536x19[_0xf536x1a(0x15e)]);
            _0xf536x19[_0xf536x1a(0x171)](_0xf536x19), _0xf536x19[_0xf536x1a(0x192)][_0xf536x1a(0x17a)](_0xf536x38);
            return
        };
        if (antyavatar['has'](_0xf536x19[_0xf536x1a(0x1bb)]['id'])) {
            const _0xf536x39 = new MessageEmbed()[_0xf536x1a(0x179)](_0xf536x1a(0x159))[_0xf536x1a(0x180)](0xff0000)[_0xf536x1a(0x1a9)]('@' + _0xf536x19[_0xf536x1a(0x1bb)][_0xf536x1a(0x194)] + _0xf536x1a(0x181))['setFooter'](_0xf536x1a(0x154) + _0xf536x19[_0xf536x1a(0x1bb)][_0xf536x1a(0x194)])[_0xf536x1a(0x18a)](_0xf536x19[_0xf536x1a(0x15e)]);
            _0xf536x19[_0xf536x1a(0x192)][_0xf536x1a(0x17a)](_0xf536x39);
            return
        } else {
            antyavatar[_0xf536x1a(0x17f)](_0xf536x19[_0xf536x1a(0x1bb)]['id']), setTimeout(() => {
                const _0xf536x3a = _0xf536x1a;
                antyavatar[_0xf536x3a(0x171)](_0xf536x19[_0xf536x3a(0x1bb)]['id'])
            }, 0x57e40)
        };
        con[_0xf536x1a(0x151)](_0xf536x1a(0x1b7) + _0xf536x19[_0xf536x1a(0x1bb)]['id'] + '\'', (_0xf536x3b, _0xf536x3c) => {
            const _0xf536x3d = _0xf536x1a;
            if (_0xf536x3b) {
                throw _0xf536x3b
            };
            if (_0xf536x3c[_0xf536x3d(0x15d)] < 0x1) {
                const _0xf536x3e = new MessageEmbed()['setTitle'](_0xf536x3d(0x17e))[_0xf536x3d(0x180)](0xff0000)['setDescription']('Twoje konto discord nie jest połączone z kontem MTA!')[_0xf536x3d(0x15c)](_0xf536x3d(0x154) + _0xf536x19[_0xf536x3d(0x1bb)][_0xf536x3d(0x194)])[_0xf536x3d(0x18a)](_0xf536x19[_0xf536x3d(0x15e)]);
                _0xf536x19[_0xf536x3d(0x192)][_0xf536x3d(0x17a)](_0xf536x3e);
                return
            };
            if (_0xf536x3c['length'] >= 0x1) {
                con[_0xf536x3d(0x151)](_0xf536x3d(0x17c) + _0xf536x19[_0xf536x3d(0x1bb)][_0xf536x3d(0x193)]({
                    'format': _0xf536x3d(0x15f)
                    , 'size': 0x200
                }) + _0xf536x3d(0x160) + _0xf536x19[_0xf536x3d(0x1bb)]['id'] + '\'', (_0xf536x3f, _0xf536x40) => {
                    if (_0xf536x3f) {
                        throw _0xf536x3f
                    }
                });
                const _0xf536x41 = new MessageEmbed()[_0xf536x3d(0x179)](_0xf536x3d(0x15a))[_0xf536x3d(0x180)](0xfe7f00)[_0xf536x3d(0x1a9)]('Zr\xF3b reconnect w grze aby ujrze\u0107 sw\xF3j pi\u0119kny avatar!')[_0xf536x3d(0x15c)](_0xf536x3d(0x154) + _0xf536x19['author']['tag'])['setTimestamp'](_0xf536x19[_0xf536x3d(0x15e)]);
                _0xf536x19[_0xf536x3d(0x192)]['send'](_0xf536x41);
                return
            }
        });
        return
    };
    if (!_0x12cb57) {
        const _0xf536x42 = new MessageEmbed()['setTitle'](_0xf536x1a(0x19c))[_0xf536x1a(0x180)](0xff0000)[_0xf536x1a(0x1a9)]('Błąd: Tutaj możesz używać tylko komendy !polacz,!avatar')[_0xf536x1a(0x15c)]('Wykonano przez: ' + _0xf536x19[_0xf536x1a(0x1bb)][_0xf536x1a(0x194)])[_0xf536x1a(0x18a)](_0xf536x19['createdAt']);
        _0xf536x19[_0xf536x1a(0x192)][_0xf536x1a(0x17a)](_0xf536x42);
        return
    };
    if (_0xf536x1c === 'odetnij') {
        if (_0xf536x19[_0xf536x1a(0x192)]['id'] !== kanalwspolprac) {
            const _0xf536x43 = new MessageEmbed()[_0xf536x1a(0x179)](_0xf536x1a(0x19c))[_0xf536x1a(0x180)](0xff0000)['setDescription'](_0xf536x1a(0x1a1))[_0xf536x1a(0x15c)](_0xf536x1a(0x154) + _0xf536x19[_0xf536x1a(0x1bb)][_0xf536x1a(0x194)])[_0xf536x1a(0x18a)](_0xf536x19[_0xf536x1a(0x15e)]);
            _0xf536x19[_0xf536x1a(0x192)][_0xf536x1a(0x17a)](_0xf536x43);
            return
        };
        _0xf536x19['delete'](_0xf536x19), _0xf536x19[_0xf536x1a(0x192)]['send']('http://futuremta.pl/odetnij.gif');
        return
    };
    if (_0xf536x19[_0xf536x1a(0x192)]['id'] !== kanalkomend) {
        _0xf536x19[_0xf536x1a(0x157)](_0xf536x1a(0x158));
        return
    };
    if (_0xf536x1c === _0xf536x1a(0x19a)) {
        if (_0xf536x1b[0x0] === undefined) {
            const _0xf536x44 = new MessageEmbed()[_0xf536x1a(0x179)](_0xf536x1a(0x19c))[_0xf536x1a(0x180)](0xff0000)[_0xf536x1a(0x1a9)]('Błąd: Brak argumentu (Podaj wartość: SID)')['setFooter'](_0xf536x1a(0x154) + _0xf536x19[_0xf536x1a(0x1bb)]['tag'])[_0xf536x1a(0x18a)](_0xf536x19['createdAt']);
            _0xf536x19['channel']['send'](_0xf536x44);
            return
        };
        if (_0xf536x1b[0x1] !== undefined) {
            const _0xf536x45 = new MessageEmbed()[_0xf536x1a(0x179)](_0xf536x1a(0x19c))[_0xf536x1a(0x180)](0xff0000)['setDescription'](_0xf536x1a(0x166))[_0xf536x1a(0x15c)](_0xf536x1a(0x154) + _0xf536x19[_0xf536x1a(0x1bb)][_0xf536x1a(0x194)])[_0xf536x1a(0x18a)](_0xf536x19[_0xf536x1a(0x15e)]);
            _0xf536x19[_0xf536x1a(0x192)][_0xf536x1a(0x17a)](_0xf536x45);
            return
        };
        if (isNaN(_0xf536x1b[0x0])) {
            const _0xf536x46 = new MessageEmbed()[_0xf536x1a(0x179)](_0xf536x1a(0x19c))[_0xf536x1a(0x180)](0xff0000)[_0xf536x1a(0x1a9)](_0xf536x1a(0x167) + _0xf536x1b[0x0])[_0xf536x1a(0x15c)](_0xf536x1a(0x154) + _0xf536x19[_0xf536x1a(0x1bb)][_0xf536x1a(0x194)])['setTimestamp'](_0xf536x19['createdAt']);
            _0xf536x19['channel'][_0xf536x1a(0x17a)](_0xf536x46);
            return
        };
        con[_0xf536x1a(0x151)](_0xf536x1a(0x1a5) + _0xf536x1b[0x0], (_0xf536x47, _0xf536x48) => {
            const _0xf536x49 = _0xf536x1a;
            if (_0xf536x47) {
                throw _0xf536x47
            };
            con[_0xf536x49(0x151)](_0xf536x49(0x195) + _0xf536x1b[0x0], (_0xf536x4a, _0xf536x4b) => {
                const _0xf536x4c = _0xf536x49;
                if (_0xf536x4a) {
                    throw _0xf536x4a
                };
                if (_0xf536x48[_0xf536x4c(0x15d)] < 0x1) {
                    const _0xf536x4d = new MessageEmbed()[_0xf536x4c(0x179)](_0xf536x4c(0x19c))['setColor'](0xff0000)[_0xf536x4c(0x1a9)]('Błąd: Nie znaleziono gracza o podanym SID: ' + _0xf536x1b[0x0])[_0xf536x4c(0x15c)]('Wykonano przez: ' + _0xf536x19[_0xf536x4c(0x1bb)][_0xf536x4c(0x194)])[_0xf536x4c(0x18a)](_0xf536x19['createdAt']);
                    _0xf536x19[_0xf536x4c(0x192)][_0xf536x4c(0x17a)](_0xf536x4d);
                    return
                };
                if (_0xf536x48[_0xf536x4c(0x15d)] >= 0x1) {
                    if (_0xf536x4b[_0xf536x4c(0x15d)] < 0x1) {
                        const _0xf536x4e = new MessageEmbed()[_0xf536x4c(0x179)](_0xf536x4c(0x191) + _0xf536x1b[0x0])[_0xf536x4c(0x180)](0xfe7f00)['setDescription'](_0xf536x4c(0x185) + _0xf536x48[0x0][_0xf536x4c(0x1ad)] + _0xf536x4c(0x14d) + Math[_0xf536x4c(0x1b6)](_0xf536x48[0x0][_0xf536x4c(0x156)] / 0x3c) + _0xf536x4c(0x197) + (_0xf536x48[0x0][_0xf536x4c(0x156)] - Math[_0xf536x4c(0x1b6)](_0xf536x48[0x0][_0xf536x4c(0x156)] / 0x3c) * 0x3c) + ' minut\x0AIlość pieniędzy w banku: ' + _0xf536x48[0x0][_0xf536x4c(0x19e)] + 'PLN\x0AKonto połączone z discordem: ' + _0xf536x48[0x0]['discordconnected'] + _0xf536x4c(0x14e))[_0xf536x4c(0x15c)]('Wykonano przez: ' + _0xf536x19['author'][_0xf536x4c(0x194)])['setThumbnail'](_0xf536x4c(0x15b))['setTimestamp'](_0xf536x19[_0xf536x4c(0x15e)]);
                        _0xf536x19[_0xf536x4c(0x192)]['send'](_0xf536x4e);
                        return
                    };
                    if (_0xf536x4b[_0xf536x4c(0x15d)] >= 0x1) {
                        const _0xf536x4f = new MessageEmbed()[_0xf536x4c(0x179)](_0xf536x4c(0x191) + _0xf536x1b[0x0])[_0xf536x4c(0x180)](0xfe7f00)[_0xf536x4c(0x1a9)](_0xf536x4c(0x185) + _0xf536x48[0x0][_0xf536x4c(0x1ad)] + _0xf536x4c(0x14d) + Math[_0xf536x4c(0x1b6)](_0xf536x48[0x0][_0xf536x4c(0x156)] / 0x3c) + _0xf536x4c(0x197) + (_0xf536x48[0x0][_0xf536x4c(0x156)] - Math[_0xf536x4c(0x1b6)](_0xf536x48[0x0][_0xf536x4c(0x156)] / 0x3c) * 0x3c) + _0xf536x4c(0x176) + _0xf536x48[0x0][_0xf536x4c(0x19e)] + _0xf536x4c(0x1b3) + _0xf536x48[0x0][_0xf536x4c(0x1ac)] + '\x0A \x0A ')[_0xf536x4c(0x15c)](_0xf536x4c(0x154) + _0xf536x19[_0xf536x4c(0x1bb)][_0xf536x4c(0x194)])['setThumbnail']('' + _0xf536x4b[0x0][_0xf536x4c(0x18f)])[_0xf536x4c(0x18a)](_0xf536x19['createdAt']);
                        _0xf536x19['channel'][_0xf536x4c(0x17a)](_0xf536x4f);
                        return
                    }
                }
            })
        });
        return
    };
    if (_0xf536x1c === _0xf536x1a(0x14b)) {
        const _0xf536x50 = new MessageEmbed()[_0xf536x1a(0x179)](_0xf536x1a(0x1af))['setColor'](0xfe7f00)[_0xf536x1a(0x1a9)]('**Autor**: vAnimo\x0A**Wersja**: v1.16\x0A**Prefix:** !\x0A**Dostępne komendy:**\x0A- info\x0A- polacz\x0A- avatar\x0A- odetnij')[_0xf536x1a(0x15c)]('Wykonano przez: ' + _0xf536x19[_0xf536x1a(0x1bb)][_0xf536x1a(0x153)])[_0xf536x1a(0x18a)](_0xf536x19[_0xf536x1a(0x15e)]);
        _0xf536x19[_0xf536x1a(0x192)]['send'](_0xf536x50);
        return
    };
    const _0xf536x51 = new MessageEmbed()[_0xf536x1a(0x179)](_0xf536x1a(0x174))['setColor'](0xff0000)[_0xf536x1a(0x1a9)](_0xf536x1a(0x1b9))[_0xf536x1a(0x15c)](_0xf536x1a(0x154) + _0xf536x19['author'][_0xf536x1a(0x153)])[_0xf536x1a(0x18a)](_0xf536x19[_0xf536x1a(0x15e)]);
    _0xf536x19['channel'][_0xf536x1a(0x17a)](_0xf536x51)
}), client['on'](_0x5456c7(0x1ba), () => {}), client['on'](_0x5456c7(0x170), () => {}), client['on']('error', () => {}), client[_0x5456c7(0x1ad)](token)
 
