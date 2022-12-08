var actionBtns = document.querySelectorAll('.action-btn')
var doneBtn = document.querySelector('.done')
var checkinBtn = document.querySelector('.checkin')
var checkoutBtn = document.querySelector('.checkout')
var waitBtn = document.querySelector('.wait')
var nullBtn = document.querySelector('.null')
var backBtn = document.querySelector('.backbtn')

var days       = document.querySelectorAll('.day')
var pastDays = document.querySelectorAll('.past-day')
var futureDays = document.querySelectorAll('.future-date')
var active = document.querySelector('.active')
var nullDays = document.querySelectorAll('.null-date')

var storeInfo
var info = document.querySelector('.info')
var infomcp = document.querySelector('.infomcp')
var vehicle = document.querySelector('.vehicle')
var route = document.querySelector('.route')

function switcher() {
    var front = document.querySelector('.front')
    var back  = document.querySelector('.back')
    if(front.classList.contains('none')) {
        front.classList.remove('none')
        back.classList.add('none')
    }
    else {
        front.classList.add('none')
        back.classList.remove('none')
    }
}

function displayFadedTask () {
    var html = ''
    vehicle.innerHTML = `Phương tiện: Xe tải 0${Math.floor(Math.random()*10)+1}`
    for(var i = 1; i <= 5; i++){
        html +=
        `<li class="mcp mcp-faded">
            <div class="mcp-num">${i}</div>
            <div class="mcp-info">
                <div>${mcp[i].name}</div>
            </div>
        </li>`
    }
    route.innerHTML = html
}

function displayMap(id) {
    infomcp.classList.add('none')
    var myMcp = mcp[id]
    info.innerHTML = 
    `<div class="mcp_info">
    <div class="mcp_id">Mã MCP: ${myMcp.name}</div>
    <div class="mcp_addr">Trạng thái: ${myMcp.status}</div>
    </div>
    ${myMcp.map}`
    info.classList.remove('none')

    checkinBtn.classList.remove('none')
}

var mcp = [
    {
        name: 'Tân Bình 01',
        status: '80%',
        vehicle: 'Xe đẩy 1',
        map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4277773666226!2d106.65228291494181!3d10.778511962102215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ec7a396297b%3A0x3ba470309c3537d3!2zNjEgVMOibiBUcmFuZywgUGjGsOG7nW5nIDksIFTDom4gQsOsbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1670400559474!5m2!1svi!2s" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
        name: 'Tân Bình 02',
        status: '90%',
        vehicle: 'Xe đẩy 2',
        map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.878869569426!2d106.6402475485935!3d10.820580814516026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529f1794790ef%3A0x4161b7d5f7b1410a!2zQ-G7rWEgaMOgbmcgVmlldHRlbA!5e0!3m2!1svi!2s!4v1670423370764!5m2!1svi!2s" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
        name: 'Q10 01',
        status: '100%',
        vehicle: 'Xe đẩy 3',
        map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1959.7471598707564!2d106.65935474138224!3d10.77340105499013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ec3c0831989%3A0x30e62be850fdfd1f!2zVsSDbiBwaMOybmcgxJDDoG8gdOG6oW8gUXXhu5FjIHThur8gT0lTUCAtIFRyxrDhu51uZyDEkOG6oWkgSOG7jWMgQsOhY2ggS2hvYSwgVHAuSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1670423305212!5m2!1svi!2s" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
        name: 'Q10 02',
        status: '90%',
        vehicle: 'Xe đẩy 4',
        map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15678.011753668769!2d106.66067317971877!3d10.772738906788623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fb2c9e8a7df%3A0x11c64852bd665219!2zVmnhu4d0IE5hbSBRdeG7kWMgVOG7sQ!5e0!3m2!1svi!2s!4v1670423257486!5m2!1svi!2s" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
        name: 'Phú Nhuận 01',
        status: '85%',
        vehicle: 'Xe đẩy 5',
        map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7838.196515454871!2d106.66172660745146!3d10.803786101655437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175292458e0f879%3A0xb00316063023ec6e!2sSalgonBusTravel!5e0!3m2!1svi!2s!4v1670423193351!5m2!1svi!2s" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
        name: 'Phú Nhuận 02',
        status: '70%',
        vehicle: 'Xe đẩy 6',
        map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15676.544327814736!2d106.67073882972086!3d10.800887954510031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d72024c905%3A0x17fb6bfbd112227a!2zQ2FmZSBW4bujdCBQaGFuIMSQw6xuaCBQaMO5bmc!5e0!3m2!1svi!2s!4v1670423156236!5m2!1svi!2s" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
        name: 'Bình Thạnh 01',
        status: '90%',
        vehicle: 'Xe đẩy 7',
        map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.985684793517!2d106.6853171649419!3d10.812407061484768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529cc25f16fa3%3A0xac4cea438cd054b!2zMTVBIE5ndXnhu4VuIFRydW5nIFRy4buxYywgUGjGsOG7nW5nIDUsIELDrG5oIFRo4bqhbmg!5e0!3m2!1svi!2s!4v1670423061567!5m2!1svi!2s" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
        name: 'Bình Thạnh 02',
        status: '89%',
        vehicle: 'Xe đẩy 8',
        map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.95622161942!2d106.69058502344714!3d10.814662262752417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa0b90183df30e734!2zTmjDoA!5e0!3m2!1svi!2s!4v1670423082129!5m2!1svi!2s" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
]