// window.onload = () => {
document.addEventListener("DOMContentLoaded", () => {

    let serverList = [{
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
    }
]
        

    // const testK = JSON.stringify(serverList)
    // localStorage.setItem('testList', testK)
    // const serverList =  localStorage.getItem('testList') ? localStorage.setItem('testList', testK) : merdaServers

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
    const buttonClose = document.querySelector('.add-server-box > #close-popup-add-server')
    buttonClose.addEventListener('click', function () {
        popupWindow.style.display = 'none'
    })

    // Try make multiple values
    const testeNameValue = document.querySelector('#server-name')
    const testeValue = document.querySelectorAll('#server-role')
    const testeColorValue = document.querySelectorAll('#server-role-color')
    let rolesValue = []
    let rolesColorValue = []
    // console.log(testeValue)
    testeValue.forEach(e => {
        rolesValue.push(e.value)
    })
    testeColorValue.forEach(e => {
        rolesColorValue.push(e.value)
    })
    console.log(`Roles: ${rolesValue} -- Color: ${rolesColorValue}`)
    console.log(testeValue.length)

    let tryHard = []
    let objReal = []

    for(let i = 0; i < testeValue.length; i++) {
        let objTeste = {
            roles: [{
                name: rolesValue[i],
                color: rolesColorValue[i]
            }]
        }

        objReal = [{name: testeNameValue.value}]

        tryHard.push(objTeste)
        // objReal.push(tryHard)

        var fodase = objReal.concat(tryHard)
        
        // objReal.concat(asd, objTeste)
        // tryHard.push(`
        //         roles: {
        //             name: '${rolesValue[i]}',
        //             color: '${rolesColorValue[i]}'
        //         },
        // `)
    }
    serverList.push(fodase)

    document.querySelector('.add-server-form').innerHTML = JSON.stringify(serverList)
    console.log(serverList)


    // [{"name":"testando"},[{"roles":[{"name":"1","color":"1"}]},{"roles":[{"name":"2","color":"2"}]},{"roles":[{"name":"3","color":"3"}]},{"roles":[{"name":"4","color":"4"}]},{"roles":[{"name":"5","color":"5"}]}]]
    // [{"name":"testando"},{"roles":[{"name":"1","color":"1"}]},{"roles":[{"name":"2","color":"2"}]},{"roles":[{"name":"3","color":"3"}]},{"roles":[{"name":"4","color":"4"}]},{"roles":[{"name":"5","color":"5"}]}]
    // [{"name":"testando"},{"roles":[{"name":"1","color":"1"}]},{"roles":[{"name":"2","color":"2"}]},{"roles":[{"name":"3","color":"3"}]},{"roles":[{"name":"4","color":"4"}]},{"roles":[{"name":"5","color":"5"}]}]
})