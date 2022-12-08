
for(var actionBtn of actionBtns){
    if(actionBtn != checkinBtn)
        actionBtn.addEventListener('click', switcher)
}

for(var day of days)
    day.addEventListener('click', switcher)

for(var day of futureDays){
    day.addEventListener('click', displayFadedTask)
    day.addEventListener('click', () => {
        for(var btn of actionBtns)
            if(!btn.classList.contains('none'))
                btn.classList.add('none')
        waitBtn.classList.remove('none')
    })
}

for(var day of pastDays){
    day.addEventListener('click', displayFadedTask)
    day.addEventListener('click', () => {
        for(var btn of actionBtns)
            if(!btn.classList.contains('none'))
                btn.classList.add('none')
        doneBtn.classList.remove('none')
    })
}

for(var day of nullDays) {
    day.addEventListener('click', ()=>{
        route.innerHTML = ''
        vehicle.innerHTML = ''
    })
    day.addEventListener('click', () => {
        for(var btn of actionBtns)
            if(!btn.classList.contains('none'))
                btn.classList.add('none')
        nullBtn.classList.remove('none')
    })
}

var mcpCount = 1;

function displayTask() {
    for(var btn of actionBtns)
        if(!btn.classList.contains('none')&&btn!=checkinBtn)
            btn.classList.add('none')
    backBtn.classList.remove('none')

    var html = ''
    vehicle.innerHTML = `Phương tiện: Xe tải 0${Math.floor(Math.random()*10)+1}`
    for(var i = 3; i <= 7; i++){
        if(i==mcpCount+2)
            html +=
            `<li class="mcp">
                <div class="mcp-num">${i-2}</div>
                <div class="mcp-info">
                    <div>${mcp[i].name}</div>
                </div>
                <div class="mcp-btn"id="${i}"onclick="displayMap(${i})">Bắt đầu</div>
            </li>`
        else
            html +=
            `<li class="mcp mcp-faded">
                <div class="mcp-num">${i-2}</div>
                <div class="mcp-info">
                    <div>${mcp[i].name}</div>
                </div>
                <div class="mcp-btn none"id="${i}"onclick="displayMap(${i})">Bắt đầu</div>
            </li>`
    }
    route.innerHTML = html
    startBtns = document.querySelectorAll('.mcp-btn')
}

active.addEventListener('click', displayTask)
active.addEventListener('click', switcher)

checkinBtn.addEventListener('click', ()=>{
    mcpCount++
    info.classList.add('none')
    infomcp.classList.remove('none')
    checkinBtn.classList.add('none')
    displayTask()
    if(mcpCount > 5) {
        for(var btn of actionBtns)
            if(!btn.classList.contains('none'))
                btn.classList.add('none')
        doneBtn.classList.remove('none')
    }
})

