// window.onload = () => {
    document.addEventListener("DOMContentLoaded", () => {

        let serverList = [{
            id: 1,
            name: 'aTitty',
            roles: [{
                name: 'Server Booster',
                color: '#f0cde6'
            }, {
                name: 'Litty Titty',
                color: '#1bbc9c'
            }, {
                name: 'Verified',
                color: '#babbbf'
            }]
        }, {
            id: 2,
            name: 'Sniper DAO',
            roles: [{
                name: 'Sniper Gang',
                color: '#00dcff'
            }, {
                name: 'alpha α',
                color: '#3598db'
            }, {
                name: 'Players',
                color: '#babbbf'
            }]
        }, {
            id: 3,
            name: 'Whitelist HUB',
            roles: [{
                name: 'HUB HOLDER',
                color: '#e8c545'
            }, {
                name: 'Alpha Hub',
                color: '#babbbf'
            }, {
                name: 'Whitelist Opportunities',
                color: '#babbbf'
            }, {
                name: 'VERIFIED',
                color: '#5497d6'
            }]
        }, {
            id: 4,
            name: 'Jelly eSports',
            roles: [{
                name: '🐶 DAWG LIST',
                color: '#9b59b6',
                icon: 'assets/img/dawg.svg'
            }, {
                name: 'WL Ping',
                color: '#f8f3f3'
            }, {
                name: 'Alpha Ping',
                color: '#f7f3f3'
            }, {
                name: 'Raider Ping',
                color: '#ffffff'
            }]
        }, {
            id: 5,
            name: 'Teste',
            roles: [{
                name: 'Teste',
                color: '#9b59b6',
                icon: 'assets/img/teste.jpg'
            }, {
                name: 'WL Ping',
                color: '#f8f3f3',
                icon: 'assets/img/teste2.jpg'
            }]
        }, {
            id: 6,
            name: 'AI Battle Degens',
            roles: [{
                name: 'Recruit',
                color: '#3598db'
            }, {
                name: 'Gamers',
                color: '#ce0d0e'
            }, {
                name: 'Need WL',
                color: '#ffffff'
            }, {
                name: 'Raids',
                color: '#00ec66'
            }, {
                name: 'Giveaways',
                color: '#ff7500'
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

            let rolesValue = []
            let rolesColorValue = []

            serverAddRole.forEach(e => {
                rolesValue.push(e.value)
            })
            serverAddRoleColor.forEach(e => {
                rolesColorValue.push(e.value)
            })

            if(serverAddName.value != '') {

                let objArray = []

                for(let i = 0; i < serverAddRole.length; i++) {

                    if(rolesValue[i] == '' || rolesColorValue[i] == '') {
                        alert("Preecha todos os campos!")
                        return
                    }

                    let objRoles = {
                        name: rolesValue[i],
                        color: rolesColorValue[i]
                    }

                    objArray.push(objRoles)
                }

                const countID =  serverList.length + 1
                let objReal = {
                    id: countID + 1,
                    name: serverAddName.value, 
                    roles: [...objArray]
                }

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
        const getServerName = serverList.map(server => server.name)
    
        const getRoleObj = role => role.roles.map(role => role)
        const roleObj = serverList.map(getRoleObj)
    
        // Server List + Button
        getServerName.forEach((e, i) => {
            const selectServers = document.querySelector('header > .servers-roles')
            const createButton = document.createElement("button")
            createButton.innerHTML = e
            createButton.classList.add("button-color")
    
            // Button Click
            createButton.addEventListener("click", () => {
                const selectRoles = document.querySelector('.profile-roles')
                selectRoles.innerHTML = ''
    
                // Roles Profile
                roleObj[i].forEach(e => {
                    const verifIcon = e.icon ? `<img src="${e.icon}" width="16" height="16">` : ''
                    const template = document.createElement('div')
                    template.classList.add('role-box')
                    template.innerHTML = `<div class="role-icon" style="background-color: ${e.color};"></div><div class="role-text">${verifIcon} ${e.name}</div>`
                    const node = template.firstElementChild
                    selectRoles.appendChild(template)
                })         
            })
    
            selectServers.appendChild(createButton)        
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
            // const createImgBanner = document.createElement("img")
            // createImgBanner.setAttribute("src", discBanner)
            // createImgBanner.setAttribute("alt", "Avatar")
            // createImgBanner.classList.add("img-banner")
            // divBanner.appendChild(createImgBanner)
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
            const getGroupRoles = document.querySelectorAll('.group-add-roles')
            const setRoleID = getGroupRoles.length + 1
            const createNewGroup = document.createElement('div')
            createNewGroup.classList.add('group-add-roles')
            createNewGroup.dataset.roleId = setRoleID
            createNewGroup.innerHTML = `
                <div class="add-server-roles">
                    <input type="text" id="server-add-role" class="button-color form-input" placeholder="Nome do Cargo">
                    <input type="text" id="server-add-role-color" class="button-color form-input" placeholder="Cor do Cargo">
                </div>
                <div class="server-role-icon">
                    <input type="text" id="server-add-role-icons" class="button-color form-input" placeholder="Link de icone">
                    <input type="text" id="server-add-role-icons" class="button-color form-input" placeholder="Link de icone">
                    <button id="remove-role-icon" data-icon-role-id="${setRoleID}" class="button-remove-icons button-remove-color">X</button>
                </div>
            `
            // console.log(this)
            addServerContent.appendChild(createNewGroup)
        })

            // Add new input link icon
        document.querySelector('#popup-add-server').addEventListener('click', function () {
            const buttonAddIcon = document.querySelectorAll('#server-add-more-role-icons')
            buttonAddIcon.forEach(e => {
                e.addEventListener('click', function() {
                    const tryRoleId = document.querySelectorAll('.group-add-roles')
                    tryRoleId.forEach(e => {
                        if(e.dataset.roleId == this.dataset.iconRoleId) {
                            const addIconContent = document.querySelector(`[data-role-id="${this.dataset.iconRoleId}"] > .server-role-icon`)
                            const createNewInputIcon = document.createElement('input')
                            createNewInputIcon.setAttribute("id", "server-add-role-icons")
                            createNewInputIcon.setAttribute("placeholder", "Link de icone")
                            createNewInputIcon.classList.add('button-color')
                            createNewInputIcon.classList.add('form-input')
                            addIconContent.appendChild(createNewInputIcon)
                        }
                    })
                    console.log(buttonAddIcon)     
                })
            })
        })

        // const buttonAddIcon = document.querySelectorAll('#server-add-more-role-icons')
        //     buttonAddIcon.forEach(e => {
        //         e.addEventListener('click', function() {
        //             const tryRoleId = document.querySelectorAll('.group-add-roles')
        //             tryRoleId.forEach(e => {
        //                 if(e.dataset.roleId == this.dataset.iconRoleId) {
        //                     const addIconContent = document.querySelector(`[data-role-id="${this.dataset.iconRoleId}"] > .server-role-icon`)
        //                     const createNewInputIcon = document.createElement('input')
        //                     createNewInputIcon.setAttribute("id", "server-add-role-icons")
        //                     createNewInputIcon.setAttribute("placeholder", "Link de icone")
        //                     createNewInputIcon.classList.add('button-color')
        //                     createNewInputIcon.classList.add('form-input')
        //                     addIconContent.appendChild(createNewInputIcon)
        //                 }
        //             })

        //             console.log(buttonAddIcon) 
                    
        //         })
        //     })

        // })
        
    }) //END