// window.onload = () => {
document.addEventListener("DOMContentLoaded", () => {

    let serverList = [{
        id: 0,
        name: 'aTitty',
        roles: [{
            name: 'Server Booster',
            color: '#f0cde6',
            icon: {}
        }, {
            name: 'Litty Titty',
            color: '#1bbc9c',
            icon: {}
        }, {
            name: 'Verified',
            color: '#babbbf',
            icon: {}
        }, {
            name: 'Alpha',
            color: '#546e7b',
            icon: {}
        }, {
            name: 'potheads',
            color: '#546e7b',
            icon: {
                urlFirst: 'assets/img/emojis/40115dda7d9f615f9561a451236d9623.svg'
            }
        }, {
            name: 'WL purge alerts',
            color: '#546e7b',
            icon: {}
        }, {
            name: 'Giveaways',
            color: '#546e7b',
            icon: {}
        }]
    }, {
        id: 0,
        name: 'Alpha C',
        roles: [{
            name: 'Membro VIP',
            color: '#f1c40f',
            icon: {
                urlFirst: 'https://cdn.discordapp.com/role-icons/982001390547255378/bfbc28bf41df6cd6ad8c95f2baa3a48e.webp?size=16&quality=lossless'
            }
        }, {
            name: 'verificado',
            color: '#00d2fc',
            icon: {}
        }, {
            name: 'wallet',
            color: '#ffffff',
            icon: {}
        }, {
            name: 'News',
            color: '#992d22',
            icon: {
                urlFirst: 'assets/img/emojis/51cd8436fb99a6f12257db34780fb7a7.svg'
            }
        }, {
            name: 'Sorteios',
            color: '#992d22',
            icon: {
                urlFirst: 'assets/img/emojis/34039c067d82e86f0f1a07ad38e86685.svg'
            }
        }, {
            name: 'Trending SOL',
            color: '#992d22',
            icon: {
                urlFirst: 'assets/img/emojis/766c86e6244395ea36c530a7a4f27242.svg'
            }
        }, {
            name: 'Trending game',
            color: '#992d22',
            icon: {
                urlFirst: 'assets/img/emojis/f1426431eb7c60fb8c072f90acb07ceb.svg'
            }
        }, {
            name: 'Allowlists',
            color: '#992d22',
            icon: {
                urlFirst: 'assets/img/emojis/2424297076c0d1c8499820fc4f9d9f57.svg'
            }
        }, {
            name: 'Perna',
            color: '#992d22',
            icon: {
                urlFirst: 'assets/img/emojis/344019c5657ef505cd2458f05f1c89fe.svg'
            }
        }, {
            name: 'Degenz',
            color: '#992d22',
            icon: {
                urlFirst: 'assets/img/emojis/fd75504bd8a4810f750bdb5a94ade84c.svg'
            }
        }, {
            name: 'Alertas',
            color: '#992d22',
            icon: {}
        }, {
            name: 'stealth',
            color: '#992d22',
            icon: {}
        }, {
            name: 'calls Eth',
            color: '#992d22',
            icon: {}
        }]
    }, {
        id: 0,
        name: 'Thomas DAO',
        roles: [{
            name: 'Server Booster',
            color: '#f480ff',
            icon: {}
        }, {
            name: 'King Jerry',
            color: '#f1c40f',
            icon: {}
        }, {
            name: 'soldier jerry',
            color: '#1f8b4d',
            icon: {}
        }, {
            name: 'jerry',
            color: '#d46e08',
            icon: {}
        }]
    }, {
        id: 0,
        name: 'Sushiii DAO',
        roles: [{
            name: '????True Frens',
            color: '#ffba86',
            icon: {
                urlFirst: 'https://cdn.discordapp.com/role-icons/963341965334810624/265a5f0a1765c2a962162bc05cee61bf.webp?size=16&quality=lossless'
            }
        }, {
            name: 'Alpha Leak',
            color: '#cf4a4a',
            icon: {}
        }, {
            name: 'Daily Mints',
            color: '#f59637',
            icon: {}
        }, {
            name: 'Wallet Submission',
            color: '#11806a',
            icon: {
                urlFirst: 'https://cdn.discordapp.com/role-icons/963148847322890300/1f182893294f3580b5f800a48950f21d.webp?size=16&quality=lossless'
            }
        }, {
            name: 'Red Flag',
            color: '#ff0000',
            icon: {}
        }, {
            name: 'Token Ping',
            color: '#ffd13b',
            icon: {
                urlFirst: 'https://cdn.discordapp.com/role-icons/963149141070975026/e8b04c5453e1e8f1455c0da6b1a79215.webp?size=16&quality=lossless'
            }
        }, {
            name: 'Purge Ping',
            color: '#eb7545',
            icon: {
                urlFirst: 'https://cdn.discordapp.com/role-icons/963149286919528459/833b0b71363f55cea3613ba53b19dc9e.webp?size=16&quality=lossless'
            }
        }, {
            name: 'WL Ping',
            color: '#ffffff',
            icon: {
                urlFirst: 'https://cdn.discordapp.com/role-icons/963149396856410152/855e42b9797b0eae16640e463d2d4cec.webp?size=16&quality=lossless'
            }
        }, {
            name: 'WL Games',
            color: '#9b59b6',
            icon: {
                urlFirst: 'https://cdn.discordapp.com/role-icons/964049945164414996/e200691b53185f1d3ad1e8176fafd566.webp?size=16&quality=lossless'
            }
        }, {
            name: 'Degen',
            color: '#67aa68',
            icon: {
                urlFirst: 'https://cdn.discordapp.com/role-icons/984830445910913055/8c1ebb61a1b66bcc683c755f083b2a59.webp?size=16&quality=lossless'
            }
        }]
    }, {
        id: 0,
        name: 'Patches',
        roles: [{
            name: 'Patches PASS',
            color: '#e67e22',
            icon: {}
        }, {
            name: 'Patch',
            color: '#3498db',
            icon: {}
        }, {
            name: ':(',
            color: '#e74c3c',
            icon: {}
        }]
    }, {
        id: 0,
        name: "Satori",
        roles: [
            {
                name: "Satorian",
                color: "#2ecc70",
                icon: {}
            },
            {
                name: "Awakened",
                color: "#5b46ea",
                icon: {}
            },
            {
                name: "Meditators",
                color: "#f1c40e",
                icon: {}
            },
            {
                name: "Giveaways Alerts",
                color: "#ffffff",
                icon: {}
            },
            {
                name: "Zen Raiders",
                color: "#c5e284",
                icon: {}
            },
            {
                name: "Alpha Alerts",
                color: "#fed701",
                icon: {}
            },
            {
                name: "Event Alerts",
                color: "#fe0000",
                icon: {}
            },
            {
                name: "Verified",
                color: "#01d2fb",
                icon: {}
            },
            {
                name: "Manifest Whitelist",
                color: "#fafafa",
                icon: {}
            }
        ]
    }, {
        id: 0,
        name: 'Kirin Kingdom',
        roles: [{
            name: 'Verified Holder',
            color: '#fa96ff',
            icon: {}
        }, {
            name: 'Mikuko Citizen',
            color: '#f1c40f',
            icon: {}
        }, {
            name: 'RAIDS',
            color: '#0088fe',
            icon: {}
        }, {
            name: 'Daily Mints',
            color: '#e84e3e',
            icon: {}
        }, {
            name: 'Alpha Pings',
            color: '#babbbf',
            icon: {}
        }, {
            name: 'early project pings',
            color: '#bbbcbf',
            icon: {}
        }, {
            name: 'degen pings',
            color: '#607e89',
            icon: {}
        }, {
            name: 'community calls',
            color: '#ea1e63',
            icon: {}
        }, {
            name: 'wallet submission',
            color: '#b97d7d',
            icon: {}
        }]
    }, {
        id: 0,
        name: 'Simpl3r: Bounty Hunter',
        roles: [{
            name: 'Bounty hunter',
            color: '#2fcb70',
            icon: {
                urlFirst: 'https://cdn.discordapp.com/role-icons/1002526017132433469/24272a931a6ad8f1a3f60378af3cd3f4.webp?size=16&quality=lossless'
            }
        }, {
            name: 'VIP List',
            color: '#9682ff',
            icon: {}
        }, {
            name: 'Pre-Sale',
            color: '#f4c37e',
            icon: {}
        }, {
            name: 'Whitelist',
            color: '#e86793',
            icon: {}
        }, {
            name: 'Hunter',
            color: '#208b4d',
            icon: {}
        }, {
            name: 'M11',
            color: '#babbbf',
            icon: {}
        }]
    }, {
        id: 0,
        name: 'The Sports Club',
        roles: [{
            name: 'Most Valuable Player ????',
            color: '#0fbff1',
            icon: {}
        }, {
            name: 'Members',
            color: '#607d8b',
            icon: {}
        }, {
            name: 'New User',
            color: '#b9bbbe',
            icon: {}
        }]
    }, {
        id: 0,
        name: 'Hyper Drifter',
        roles: [{
            name: 'True Drifters',
            color: '#885ee6',
            icon: {
                urlFirst: 'https://cdn.discordapp.com/role-icons/1018201371591319602/06251b1328b5415fb3858e3c96fb4f5d.webp?size=16&quality=lossless'
            }
        }, {
            name: 'Drifters',
            color: '#1debd0',
            icon: {}
        }, {
            name: 'Alpha Drifters',
            color: '#2ecc71',
            icon: {}
        }, {
            name: 'Giveaway Drifters',
            color: '#ec5b8f',
            icon: {}
        }, {
            name: 'Whitelist Drifters',
            color: '#3498db',
            icon: {}
        }, {
            name: 'Degen Drifters',
            color: '#f84646',
            icon: {}
        }, {
            name: 'Raider Drifters',
            color: '#9fe4da',
            icon: {}
        }]
    }, {
        id: 0,
        name: 'Sleepy Pandas',
        roles: [{
            name: 'Panda Holder',
            color: '#fa65ef',
            icon: {}
        }, {
            name: 'Panda',
            color: '#2dcc70',
            icon: {}
        }, {
            name: '$Raider',
            color: '#ad1358',
            icon: {}
        }]
    }, {
        id: 0,
        name: 'Sniper DAO',
        roles: [{
            name: 'Sniper Gang',
            color: '#00dcff',
            icon: {}
        }, {
            name: 'alpha ??',
            color: '#3598db',
            icon: {}
        }, {
            name: 'Players',
            color: '#babbbf',
            icon: {}
        }]
    }, {
        id: 0,
        name: 'Whitelist HUB',
        roles: [{
            name: 'HUB HOLDER',
            color: '#e8c545',
            icon: {}
        }, {
            name: 'Alpha Hub',
            color: '#babbbf',
            icon: {}
        }, {
            name: 'Whitelist Opportunities',
            color: '#babbbf',
            icon: {}
        }, {
            name: 'VERIFIED',
            color: '#5497d6',
            icon: {}
        }]
    }, {
        id: 0,
        name: 'Jelly eSports',
        roles: [{
            name: '???? DAWG LIST',
            color: '#9b59b6',
            icon: {
                urlFirst: 'assets/img/dawg.svg'
            }
        }, {
            name: 'WL Ping',
            color: '#f8f3f3',
            icon: {}
        }, {
            name: 'Alpha Ping',
            color: '#f7f3f3',
            icon: {}
        }, {
            name: 'Raider Ping',
            color: '#ffffff',
            icon: {}
        }]
    }, {
        id: 0,
        name: 'AI Battle Degens',
        roles: [{
            name: 'Recruit',
            color: '#3598db',
            icon: {}
        }, {
            name: 'Gamers',
            color: '#ce0d0e',
            icon: {}
        }, {
            name: 'Need WL',
            color: '#ffffff',
            icon: {}
        }, {
            name: 'Raids',
            color: '#00ec66',
            icon: {}
        }, {
            name: 'Giveaways',
            color: '#ff7500',
            icon: {}
        }]
    }, {
        id: 0,
        name: "Samurai Army",
        roles: [
            {
                name: "Samurai Holder",
                color: "#d63cb6",
                icon: {}
            },
            {
                name: "Samurai",
                color: "#70b7db",
                icon: {}
            },
            {
                name: "Official Events",
                color: "#babbbf",
                icon: {}
            },
            {
                name: "Community Events",
                color: "#babbbf",
                icon: {}
            },
            {
                name: "Twitter Ping",
                color: "#babbbf",
                icon: {}
            },
            {
                name: "Economy Notifications",
                color: "#babbbf",
                icon: {}
            },
            {
                name: "Shooter",
                color: "#babbbf",
                icon: {}
            },
            {
                name: "BR",
                color: "#babbbf",
                icon: {
                    urlFirst: "https://cdn.discordapp.com/role-icons/943125253054398524/6608a7d4a6bb205d2e9dec7441d6e2c7.webp?size=16&quality=high"
                }
            }
        ]
    }, {
        id: 0,
        name: "GhostFace",
        roles: [
            {
                name: "GEN 2 Ghost",
                color: "#50b8df",
                icon: {}
            },
            {
                name: "Ghosts",
                color: "#daa981",
                icon: {
                    urlFirst: "https://cdn.discordapp.com/role-icons/917921218823327788/872d9e8f09e981dc32a5079234f99056.webp?size=16&quality=lossless"
                }
            },
            {
                name: "LEVEL 1",
                color: "#25bc9d",
                icon: {}
            },
            {
                name: "demon",
                color: "#ce1a23",
                icon: {}
            }
        ]
    }, {
        id: 0,
        name: "Jelly Holder",
        roles: [
            {
                name: "JellyDawg Holder",
                color: "#9a59b4",
                icon: {
                    urlFirst: "https://discord-fake-profile.onrender.com/assets/img/dawg.svg"
                }
            },
            {
                name: "DAWG LIST",
                color: "#95a4a5",
                icon: {
                    urlFirst: "https://discord-fake-profile.onrender.com/assets/img/dawg.svg"
                }
            },
            {
                name: "Sports Betting",
                color: "#ffffff",
                icon: {}
            },
            {
                name: "WL Ping",
                color: "#ffffff",
                icon: {}
            },
            {
                name: "Poker Ping",
                color: "#ffffff",
                icon: {}
            },
            {
                name: "Alpha Ping",
                color: "#ffffff",
                icon: {}
            },
            {
                name: "Raider Ping",
                color: "#ffffff",
                icon: {}
            }
        ]
    }, {
        id: 0,
        name: "Trippin Ape Tribe",
        roles: [
            {
                name: "Tribe Initiate",
                color: "#01ffff",
                icon: {}
            },
            {
                name: "Verified Neophyte",
                color: "#1f6694",
                icon: {
                    urlFirst: "https://discord-fake-profile.onrender.com/assets/img/emojis/29b4e3bbe8a0af346aa0cc36a50f0bbb.svg"
                }
            },
            {
                name: "Tribe Gamer",
                color: "#ea1e64",
                icon: {}
            }
        ]
    }, {
        id: 0,
        name: "Suave Seals",
        roles: [
            {
                name: "Holders",
                color: "#6ac6ed",
                icon: {
                    urlFirst: "https://cdn.discordapp.com/role-icons/933327529689899009/f6f9661f35127d26d68bb78797ac1ed8.webp?size=16&quality=lossless"
                }
            },
            {
                name: "WL Ops",
                color: "#d1e4c3",
                icon: {
                    urlFirst: "https://cdn.discordapp.com/role-icons/963767426238005310/1ab1ff642dae285dbda401b205d17538.webp?size=16&quality=lossless"
                }
            },
            {
                name: "?????? Seals",
                color: "#c2eeff",
                icon: {}
            }
        ]
    }, {
        id: 0,
        name: "Broccoli DAO",
        roles: [
            {
                name: "Zealot",
                color: "#93ec9c",
                icon: {}
            },
            {
                name: "Villainz",
                color: "#2dcc70",
                icon: {
                    urlFirst: "https://cdn.discordapp.com/role-icons/945310161986265230/af1369ae0d972b357fa0ae9b5282b302.webp?size=16&quality=lossless"
                }
            },
            {
                name: "Heroez",
                color: "#f382da",
                icon: {
                    urlFirst: "https://cdn.discordapp.com/role-icons/975379345264762890/81775383389820865b6fa8aeab328e45.webp?size=16&quality=lossless"
                }
            },
            {
                name: "Memberz",
                color: "#babbbf",
                icon: {}
            },
            {
                name: "Alpha",
                color: "#546f7a",
                icon: {}
            }
        ]
    }, {
        id: 0,
        name: "Light Reapers {LIT}",
        roles: [
            {
                name: "LIT Gang",
                color: "#1c6ffb",
                icon: {}
            },
            {
                name: "Verified LIT Reapers ??????",
                color: "#1f8b4d",
                icon: {}
            }
        ]
    }, {
        id: 0,
        name: "Degen Apes Academy",
        roles: [
            {
                name: "Trash Enrolled",
                color: "#3699db",
                icon: {}
            },
            {
                name: "Degen Frens",
                color: "#9f7f80",
                icon: {}
            },
            {
                name: "Dumpster-Divers",
                color: "#04f7a6",
                icon: {}
            }
        ]
    }, {
        id: 0,
        name: "Ghost Kid DAO",
        roles: [
            {
                name: "GhostDAO",
                color: "#9b51ff",
                icon: {}
            },
            {
                name: "Mortal",
                color: "#3598db",
                icon: {}
            },
            {
                name: "Community Alpha Hunter",
                color: "#5658f1",
                icon: {}
            },
            {
                name: "Trade Call",
                color: "#ff9190",
                icon: {}
            },
            {
                name: "Need Whitelist",
                color: "#bb2322",
                icon: {}
            },
            {
                name: "Boonties",
                color: "#e67f22",
                icon: {}
            },
            {
                name: "Raid to Earn",
                color: "#e67f22",
                icon: {}
            },
            {
                name: "Giveaways",
                color: "#1f8b4d",
                icon: {}
            },
            {
                name: "GKD Gamer",
                color: "#3598db",
                icon: {}
            },
            {
                name: "tardo calls",
                color: "#992d21",
                icon: {}
            },
            {
                name: "high nxxn",
                color: "#f1c40f",
                icon: {}
            }
        ]
    }, {
        id: 0,
        name: "SoDead",
        roles: [
            {
                name: "Glass DAO",
                color: "#53b3f0",
                icon: {}
            },
            {
                name: "SoDead Holder",
                color: "#18a8c1",
                icon: {}
            },
            {
                name: "Dead",
                color: "#2dcc71",
                icon: {}
            },
            {
                name: "Whitelist Giveaways",
                color: "#babbbf",
                icon: {}
            }
        ]
    }, {
        id: 0,
        name: "Famous Fox",
        roles: [
            {
                name: "Kings",
                color: "#e6db81",
                icon: {}
            },
            {
                name: "Raid Fox",
                color: "#920000",
                icon: {}
            },
            {
                name: "foxydao",
                color: "#af4509",
                icon: {
                    urlFirst: "https://cdn.discordapp.com/role-icons/894084950305931275/f90862d51667316cbff0f032ef568219.webp?size=16&quality=lossless"
                }
            },
            {
                name: "Fox",
                color: "#c97970",
                icon: {
                    urlFirst: "https://cdn.discordapp.com/role-icons/881278120349564928/4b7161d2ad1cbad8614a5b1e30bcc970.webp?size=16&quality=lossless"
                }
            },
            {
                name: "Vibing Fox",
                color: "#32d8cc",
                icon: {}
            },
            {
                name: "Gamer Fox",
                color: "#b0da6c",
                icon: {}
            },
            {
                name: "Degen Fox",
                color: "#bb3d3e",
                icon: {}
            },
            {
                name: "Lore Fox",
                color: "#feb100",
                icon: {}
            }
        ]
    }, {
        id: 0,
        name: "Aurory Project",
        roles: [
            {
                name: "Certified Aurorian",
                color: "#1bbc9b",
                icon: {}
            },
            {
                name: "Aurorians",
                color: "#607d8b",
                icon: {}
            },
            {
                name: "NFT Enjoyer",
                color: "#e95d5d",
                icon: {}
            },
            {
                name: "Quiz Alert",
                color: "#2ecc71",
                icon: {}
            },
            {
                name: "Raider Team",
                color: "#09372b",
                icon: {}
            }
        ]
    }, {
        id: 0,
        name: "Big Foot Holder",
        roles: [
            {
                name: "BigFoot Dreamer",
                color: "#1bf0cb",
                icon: {
                    urlFirst: "https://discord-fake-profile.onrender.com/assets/img/emojis/0933c4860868252befc05509165a1db4.svg"
                }
            },
            {
                name: "BigFoot Whitelist",
                color: "#3498db",
                icon: {
                    urlFirst: "https://discord-fake-profile.onrender.com/assets/img/emojis/5a8d9af8b5b3922097b2cccfce844630.svg"
                }
            },
            {
                name: "BigFoot Lover",
                color: "#ffffff",
                icon: {}
            }
        ]
    }, {
        id: 0,
        name: "TombStoned",
        roles: [
            {
                name: "Stoned to the Bone",
                color: "#0c0c0c",
                icon: {
                    urlFirst: "https://cdn.discordapp.com/role-icons/959552817096425572/1f10686b53aa0a653633b3cf3bdb5a21.webp?size=16&quality=lossless"
                }
            },
            {
                name: "Stoned Skeleton",
                color: "#2ecc71",
                icon: {
                    urlFirst: "https://cdn.discordapp.com/role-icons/927773492101931008/e8359f9e5e21fa6af85f9654458d88b3.webp?size=16&quality=lossless"
                }
            }
        ]
    }, {
        id: 0,
        name: "AI Labs Holder",
        roles: [
            {
                name: "Cloud Walker",
                color: "#1bbc9b",
                icon: {}
            },
            {
                name: "Whitelist I",
                color: "#ff7673",
                icon: {}
            },
            {
                name: "Human",
                color: "#1f6694",
                icon: {}
            }
        ]
    }, {
        id: 0,
        name: "Cyberlinx Holder",
        roles: [
            {
                name: "Linx Rebels",
                color: "#62e8ff",
                icon: {
                    urlFirst: "https://cdn.discordapp.com/role-icons/1016890170752127027/e0f25578c29702e91878ff3953ded9be.webp?size=16&quality=lossless"
                }
            },
            {
                name: "Verified",
                color: "#dfcece",
                icon: {}
            }
        ]
    }]

    // Adiciona servidores de usuario nos servidores fixo
    const localServerList = localStorage.getItem('serverListUser')

    if (localServerList) {
        let objParse = JSON.parse(localServerList)
        objParse.map(e => serverList.push(e))
    }

    // Carrega Status do User
    const getStatusUser = localStorage.getItem('userStatus')
    const getDivStatus = document.querySelector('.discord-profile > .avatar-status')
    if (getStatusUser == 1) {
        getDivStatus.classList.add('avatar-status-online-color')
        getDivStatus.innerHTML = ''
    } else if (getStatusUser == 2) {
        getDivStatus.classList.add('avatar-status-busy-color')
        getDivStatus.innerHTML = '<div class="status-cut-busy"></div>'
    } else if (getStatusUser == 3) {
        getDivStatus.classList.add('avatar-status-away-color')
        getDivStatus.innerHTML = '<div class="status-cut-away"></div>'
    } else if (getStatusUser == 4) {
        getDivStatus.classList.add('avatar-status-invisible-color')
        getDivStatus.innerHTML = '<div class="status-cut-invisible"></div>'
    } else {
        getDivStatus.classList.add('avatar-status-online-color')
        getDivStatus.innerHTML = ''
    }

    //Carregar NITRO badges
    const getUserNitro = localStorage.getItem('userNitro')
    const profileBoost = document.querySelector('.discord-profile > .profile-boost')

    if (getUserNitro > 0) {
        profileBoost.innerHTML = `
                <img src="assets/img/badges/nitro.svg" alt="">
                <img src="assets/img/badges/boost${getUserNitro}month.svg" alt="">
            `
    } else {
        profileBoost.innerHTML = `<div style="width:22px; height:22px;"></div>`
    }

    // Adicionar novo servidor (user)
    const buttonConfirmAddServer = document.querySelector('#confirm-add-server')
    buttonConfirmAddServer.addEventListener('click', function () {

        const serverAddName = document.querySelector('#server-add-name')
        const serverAddRole = document.querySelectorAll('#server-add-role')
        const serverAddRoleColor = document.querySelectorAll('#server-add-role-color')
        const serverAddRoleFirstIcon = document.querySelectorAll('#server-add-role-icons-1')
        const serverAddRoleSecIcon = document.querySelectorAll('#server-add-role-icons-2')

        let rolesValue = []
        let rolesColorValue = []
        let rolesIconFirstValue = []
        let rolesIconSecValue = []

        serverAddRole.forEach(e => {
            rolesValue.push(e.value)
        })
        serverAddRoleColor.forEach(e => {
            rolesColorValue.push(e.value)
        })
        serverAddRoleFirstIcon.forEach(e => {
            rolesIconFirstValue.push(e.value)
        })
        serverAddRoleSecIcon.forEach(e => {
            rolesIconSecValue.push(e.value)
        })

        if (serverAddName.value != '') {

            let objArray = []
            let objIcon = []

            for (let i = 0; i < serverAddRole.length; i++) {

                if (rolesValue[i] == '' || rolesColorValue[i] == '') {
                    alert("Preecha todos os campos!")
                    return
                }

                rolesIconFirstValue[i] = rolesIconFirstValue[i] ? rolesIconFirstValue[i] : undefined
                rolesIconSecValue[i] = rolesIconSecValue[i] ? rolesIconSecValue[i] : undefined

                let objRoles = {
                    name: rolesValue[i],
                    color: rolesColorValue[i],
                    icon: {
                        urlFirst: rolesIconFirstValue[i],
                        urlSec: rolesIconSecValue[i]
                    }
                }

                objArray.push(objRoles)
            }

            const filterID = (arr, value) => arr.filter(e => e.id === value)
            const generateNewID = (range) => parseInt(Math.floor((Math.random() * range)))

            const newID = []
            newID[0] = generateNewID(500)
            const verifiyID = filterID(serverList, newID[0])
            // let newVerifyID = verifiyID == false ? newID[0] : newVerifyID
            let newVerifyID = undefined

            if (verifiyID == false) {
                newVerifyID = newID[0]
            } else {
                alert('tente de novo!')
                return
            }

            let objReal = {
                id: newVerifyID,
                name: serverAddName.value,
                roles: [...objArray]
            }

            // console.log("objIcon2:" + objIcon)

            let objArrayTeste = []
            objArrayTeste.push(objReal)

            if (localServerList) {
                const parseLocalList = JSON.parse(localServerList)
                parseLocalList.push(objReal)
                const stringLocalList = JSON.stringify(parseLocalList)
                localStorage.setItem('serverListUser', stringLocalList)
                document.location.reload(true)
            } else {
                const objListString = JSON.stringify(objArrayTeste)
                localStorage.setItem('serverListUser', objListString)
                document.location.reload(true)
            }

        } else {
            alert("Preecha todos os campos!")
            return
        }
    })

    // Carrega a lista de bot??es de servers
    const getServerName = serverList.map(server => server)

    const getRoleObj = role => role.roles.map(role => role)
    const roleObj = serverList.map(getRoleObj)

    // Server List + Button
    getServerName.forEach((e, i) => {
        const selectServers = document.querySelector('header > .servers-roles')
        const disableFixed = e.id == 0 ? `disabled style="display:none;"` : ''
        const createGroupButton = document.createElement('div')
        createGroupButton.classList.add('button-role-group')
        createGroupButton.innerHTML = `
                <button id="button-add-role" class="button-role button-color" data-role-id="${e.id}">${e.name}</button>
                <button id="button-remove-server" class="button-remove" data-remove-role-id="${e.id}" ${disableFixed}>X</button>
            `

        selectServers.appendChild(createGroupButton)
    })

    // Button Role Group Button Click (Select Role from Profile)
    const buttonRoleGroup = document.querySelectorAll('.button-role-group > #button-add-role')
    const buttonSelectRole = []
    buttonRoleGroup.forEach(e => buttonSelectRole.push(e))
    buttonSelectRole.map((e, i) => {
        e.addEventListener('click', function () {
            // console.log(e + " - " + i)
            const selectRoles = document.querySelector('.profile-roles')
            selectRoles.innerHTML = ''

            // Roles Profile
            roleObj[i].forEach(e => {
                const verifFirstIcon = e.icon.urlFirst ? `<img src="${e.icon.urlFirst}" width="16" height="16">` : ''
                const verifSecIcon = e.icon.urlSec ? `<img src="${e.icon.urlSec}" width="16" height="16">` : ''
                const template = document.createElement('div')
                template.classList.add('role-box')
                template.innerHTML = `<div class="role-icon" style="background-color: ${e.color};"></div><div class="role-text">${verifFirstIcon} ${verifSecIcon} ${e.name}</div>`
                const node = template.firstElementChild
                selectRoles.appendChild(template)
            })
        })
    })

    // Button Remove Server - CTRL+C e CTRL+V do button acima xD
    const buttonRemoveServer = document.querySelectorAll('.button-role-group > #button-remove-server')
    const buttonTryRemove = []
    buttonRemoveServer.forEach(e => buttonTryRemove.push(e))
    buttonTryRemove.map((e, i) => {
        e.addEventListener('click', function () {
            const getServerID = this.dataset.removeRoleId
            const getLocalServerList = JSON.parse(localServerList)
            getLocalServerList.map((m, i) => {
                if (m.id == getServerID) {
                    getLocalServerList[i] = 'removed'
                }
            })

            // nem eu sei como essa gambiarra funciona, mas deu certo :D
            const strLocalList = JSON.stringify(getLocalServerList)
            const firstTeste = strLocalList.search('removed')

            if (strLocalList.charAt(firstTeste + 8) == ",") {
                const substLocalList = strLocalList.replace(strLocalList.substring(firstTeste - 1, firstTeste + 9), '')
                localStorage.setItem('serverListUser', substLocalList)
                document.location.reload(true)

            } else if (strLocalList.charAt(firstTeste - 2) == ",") {
                const substLocalList = strLocalList.replace(strLocalList.substring(firstTeste - 2, firstTeste + 8), '')
                localStorage.setItem('serverListUser', substLocalList)
                document.location.reload(true)

            } else {
                localStorage.setItem('serverListUser', '')
                document.location.reload(true)
            }
        })
    })

    // Nick + Tag
    const divProfileName = document.querySelector('.discord-profile > .profile-name')
    // try localstorage xD
    const testName = localStorage.getItem('nameDisc') ? localStorage.getItem('nameDisc') : 'Nome'
    const testHash = localStorage.getItem('hashDisc') ? localStorage.getItem('hashDisc') : '123'
    divProfileName.innerHTML = `${testName}<span>#${testHash}</span>`

    const nameDisc = document.querySelector('#set-user-profile > .set-user-name-hash > #nome')
    const hashDisc = document.querySelector('#set-user-profile > .set-user-name-hash > #hashtag')
    const btnName = document.querySelector('#btn-name-hash')
    btnName.addEventListener("click", () => {

        localStorage.setItem('nameDisc', nameDisc.value)
        localStorage.setItem('hashDisc', hashDisc.value)

        divProfileName.innerHTML = ''
        divProfileName.innerHTML = `${nameDisc.value}<span>#${hashDisc.value}</span>`
    })

    // Global?
    const getProfileStatus = document.querySelector('.discord-profile > .avatar-status')
    const getClass = getProfileStatus.classList

    //Change Status (Online)
    const findButtonOnline = document.querySelector('.set-user-status > .status-row > .status-online')
    findButtonOnline.addEventListener('click', function () {
        getClass.remove(getClass[1])
        getProfileStatus.classList.add('avatar-status-online-color')
        getProfileStatus.innerHTML = ''
        localStorage.setItem('userStatus', 1)
    })

    //Change Status (Busy)
    const findButtonBusy = document.querySelector('.set-user-status > .status-row > .status-busy')
    findButtonBusy.addEventListener('click', function () {
        getClass.remove(getClass[1])
        getProfileStatus.classList.add('avatar-status-busy-color')
        getProfileStatus.innerHTML = '<div class="status-cut-busy"></div>'
        localStorage.setItem('userStatus', 2)
    })

    //Change Status (Busy)
    const findButtonAway = document.querySelector('.set-user-status > .status-row > .status-away')
    findButtonAway.addEventListener('click', function () {
        getClass.remove(getClass[1])
        getProfileStatus.classList.add('avatar-status-away-color')
        getProfileStatus.innerHTML = '<div class="status-cut-away"></div>'
        localStorage.setItem('userStatus', 3)
    })

    //Change Status (Busy)
    const findButtonInvisible = document.querySelector('.set-user-status > .status-row > .status-invisible')
    findButtonInvisible.addEventListener('click', function () {
        getClass.remove(getClass[1])
        getProfileStatus.classList.add('avatar-status-invisible-color')
        getProfileStatus.innerHTML = '<div class="status-cut-invisible"></div>'
        localStorage.setItem('userStatus', 4)
    })

    // Discord NITRO
    const findButtonNitro = document.querySelectorAll('.set-user-nitro > .nitro-badges > ul > li')
    findButtonNitro.forEach(e => {
        e.addEventListener('click', function () {
            console.log(this.dataset.nitroMonth)
            const profileBoost = document.querySelector('.discord-profile > .profile-boost')
            if (this.dataset.nitroMonth > 0) {
                profileBoost.innerHTML = `
                        <img src="assets/img/badges/nitro.svg" alt="">
                        <img src="assets/img/badges/boost${this.dataset.nitroMonth}month.svg" alt="">
                    `
            } else {
                profileBoost.innerHTML = `<div style="width:22px; height:22px;"></div>`
            }
            localStorage.setItem('userNitro', this.dataset.nitroMonth)
        })
    })

    // Avatar
    const avatarFile = document.querySelector('.set-user-avatar-banner > #profile-avatar')
    avatarFile.addEventListener('change', function () {
        const reader = new FileReader()
        reader.addEventListener("load", () => {
            localStorage.setItem('profileAvatar', reader.result)
        })
        reader.readAsDataURL(this.files[0])
        document.location.reload(true)
    })

    const discAvatar = localStorage.getItem('profileAvatar')
    if (discAvatar) {
        document.querySelector('.discord-profile > .profile-banner > .profile-avatar').setAttribute("src", discAvatar)
    }

    // Banner Image
    const bannerFile = document.querySelector('.set-user-avatar-banner > #profile-banner')
    bannerFile.addEventListener('change', function () {
        const reader = new FileReader()
        reader.addEventListener("load", () => {
            localStorage.setItem('profileBanner', reader.result)
        })
        reader.readAsDataURL(this.files[0])
        document.location.reload(true)
    })

    // Render banner
    const divBanner = document.querySelector('.discord-profile > .profile-banner')
    const divProfAvatar = document.querySelector('.profile-banner > .profile-avatar')
    const discBanner = localStorage.getItem('profileBanner')
    if (discBanner) {
        divBanner.style.backgroundImage = `url(${discBanner})`
        divBanner.classList.add("banner-image")
        divProfAvatar.style.top = "75px"
    }

    // Remove Banner Image
    const bannerRemoveBtn = document.querySelector('.set-user-avatar-banner > #remove-banner')
    bannerRemoveBtn.addEventListener('click', function () {
        localStorage.removeItem('profileBanner')
        document.location.reload(true)
    })

    // Banner Color
    const bannerSetColor = document.querySelector('#banner-color')
    bannerSetColor.addEventListener('change', function () {
        localStorage.setItem('bannerColor', this.value)
        divBanner.style.backgroundColor = this.value
    })

    const profileBannerColor = localStorage.getItem('bannerColor')
    if (profileBannerColor) {
        divBanner.style.backgroundColor = profileBannerColor
    }

    // Open popup add server
    const popupWindow = document.querySelector('#popup-add-server')
    const buttonAdd = document.querySelector('.servers-roles > #add-new-server')
    buttonAdd.addEventListener('click', function () {
        popupWindow.style.display = 'flex'
    })

    // Close popup add server
    const buttonClose = document.querySelector('#close-popup-add-server')
    buttonClose.addEventListener('click', function () {
        popupWindow.style.display = 'none'
    })

    // Add new role
    const addServerContent = document.querySelector('.add-server-form')
    const buttonAddRole = document.querySelector('#add-new-role')
    buttonAddRole.addEventListener('click', function () {
        const setRoleID = () => parseInt(Date.now() * Math.random())
        const tryRoleID = []
        tryRoleID.push(setRoleID())
        const createNewGroup = document.createElement('div')
        createNewGroup.classList.add('group-add-roles')
        createNewGroup.dataset.roleId = tryRoleID[0]
        createNewGroup.innerHTML = `
                <div class="add-server-roles">
                    <input type="text" id="server-add-role" class="button-color form-input" placeholder="Nome do Cargo">
                    <input type="text" id="server-add-role-color" class="button-color form-input" placeholder="Cor do Cargo">
                </div>
                <div class="server-role-icon">
                    <input type="text" id="server-add-role-icons-1" class="button-color form-input" placeholder="Link de icone (Apenas LINK)">
                    <input type="text" id="server-add-role-icons-2" class="button-color form-input" placeholder="Link de icone (Apenas LINK)">
                    <button id="remove-role-icon" data-icon-role-id="${tryRoleID[0]}" class="button-remove-icons button-remove-color">X</button>
                </div>
            `
        addServerContent.appendChild(createNewGroup)

        // Acho que s?? assim para atualizar o DOM para esse bot??o funcionar #gambiarra?
        const getButtonRemove = document.querySelector(`[data-icon-role-id="${tryRoleID[0]}"]`)
        getButtonRemove.addEventListener('click', function () {
            getGroupToRemove = document.querySelector(`[data-role-id="${tryRoleID[0]}"]`)
            getGroupToRemove.remove()
        })
    })

}) //END