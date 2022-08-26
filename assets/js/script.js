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
            }]
        }, {
            id: 1,
            name: 'Sniper DAO',
            roles: [{
                name: 'Sniper Gang',
                color: '#00dcff',
                icon: {}
            }, {
                name: 'alpha α',
                color: '#3598db',
                icon: {}
            }, {
                name: 'Players',
                color: '#babbbf',
                icon: {}
            }]
        }, {
            id: 2,
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
            id: 3,
            name: 'Jelly eSports',
            roles: [{
                name: '🐶 DAWG LIST',
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
            id: 4,
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
            id: 5,
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
            id: 6,
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
        }
    ]

        // Adiciona servidores de usuario nos servidores fixo
        const localServerList = localStorage.getItem('serverListUser')

        if(localServerList) {
            let objParse = JSON.parse(localServerList)
            objParse.map(e => serverList.push(e))
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

            if(serverAddName.value != '') {

                let objArray = []
                let objIcon = []

                for(let i = 0; i < serverAddRole.length; i++) {

                    if(rolesValue[i] == '' || rolesColorValue[i] == '') {
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

                if(localServerList) {
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
        
        // Carrega a lista de botões de servers
        const getServerName = serverList.map(server => server)
    
        const getRoleObj = role => role.roles.map(role => role)
        const roleObj = serverList.map(getRoleObj)
    
        // Server List + Button
        getServerName.forEach((e, i) => {
            const selectServers = document.querySelector('header > .servers-roles')
            const disableFixed = e.id >= 0 && e.id <= 6 ? "disabled" : ''
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
            e.addEventListener('click', function() {
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
            e.addEventListener('click', function() {
                const getServerID = this.dataset.removeRoleId
                const getLocalServerList = JSON.parse(localServerList)
                getLocalServerList.map((m, i) => {
                    if(m.id == getServerID) {
                        getLocalServerList[i] = 'removed'
                    }
                })

                // nem eu sei como essa gambiarra funciona, mas deu certo :D
                const strLocalList = JSON.stringify(getLocalServerList)
                const firstTeste = strLocalList.search('removed')

                if(strLocalList.charAt(firstTeste + 8) == ",") {
                    const substLocalList = strLocalList.replace(strLocalList.substring(firstTeste - 1, firstTeste + 9), '')
                    localStorage.setItem('serverListUser', substLocalList)
                    document.location.reload(true)

                } else if(strLocalList.charAt(firstTeste - 2) == ",") {
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
    
        const nameDisc = document.querySelector('.discord-set-infos > #nome')
        const hashDisc = document.querySelector('.discord-set-infos > #hashtag')
        const btnName = document.querySelector('#btn-name-hash')
        btnName.addEventListener("click", () => {
            
            localStorage.setItem('nameDisc', nameDisc.value)
            localStorage.setItem('hashDisc', hashDisc.value)
    
            divProfileName.innerHTML = ''
            divProfileName.innerHTML = `${nameDisc.value}<span>#${hashDisc.value}</span>`
        })
    
        // Avatar
        const avatarFile = document.querySelector('.discord-set-infos > #profile-avatar')
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
        const bannerFile = document.querySelector('.discord-set-infos > #profile-banner')
        bannerFile.addEventListener('change', function () {
            const reader = new FileReader()
            reader.addEventListener("load", () => {
                localStorage.setItem('profileBanner', reader.result)
            })
            reader.readAsDataURL(this.files[0])
            document.location.reload(true)
        })
    
        const divBanner = document.querySelector('.discord-profile > .profile-banner')
        const divProfAvatar = document.querySelector('.profile-banner > .profile-avatar')
        const discBanner = localStorage.getItem('profileBanner')
        if (discBanner) {
            divBanner.style.backgroundImage = `url(${discBanner})`
            divBanner.classList.add("banner-image")
            divProfAvatar.style.top = "75px"
        }
    
        // Remove Banner Image
        const bannerRemoveBtn = document.querySelector('.discord-set-infos > #remove-banner')
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

            // Acho que só assim para atualizar o DOM para esse botão funcionar #gambiarra?
            const getButtonRemove = document.querySelector(`[data-icon-role-id="${tryRoleID[0]}"]`)
            getButtonRemove.addEventListener('click', function() {
                getGroupToRemove = document.querySelector(`[data-role-id="${tryRoleID[0]}"]`)
                getGroupToRemove.remove()
            })
        })
    
    }) //END