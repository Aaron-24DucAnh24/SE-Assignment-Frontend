
for(var actionBtn of actionBtns)
    actionBtn.addEventListener('click', switcher)

for(var day of days) {
    day.addEventListener('click', switcher)
    day.addEventListener('click', () => {
        var myMcp =  mcp[Math.floor(Math.random() * 9)]
        var html = 
        `<div class="mcp_info">
        <div class="mcp_id">Mã MCP: ${myMcp.name}</div>
        <div class="mcp_addr">Trạng thái: ${myMcp.status}</div>
        <div class="mcp_troller">Phương tiện: ${myMcp.vehicle}</div>
        </div>
        ${myMcp.map}`
        info.innerHTML = html
    })
}

for(var pastDay of pastDays)
    pastDay.addEventListener('click', () => {
        for(var btn of actionBtns)
            if(!btn.classList.contains('none'))
                btn.classList.add('none')
        doneBtn.classList.remove('none')
    })

for(var futureDay of futureDays) {
    futureDay.addEventListener('click', () => {
        for(var btn of actionBtns)
            if(!btn.classList.contains('none'))
                btn.classList.add('none')
        waitBtn.classList.remove('none')
    })
}

for(var nullDay of nullDays) {
    nullDay.addEventListener('click', () => {
        for(var btn of actionBtns)
            if(!btn.classList.contains('none'))
                btn.classList.add('none')
        nullBtn.classList.remove('none')
        if(info.innerHTML != null)
            storeInfo = info.innerHTML
        info.innerHTML = ''
    })
}

active.addEventListener('click', () => {
    switcher()
    var html = 
    `<div class="mcp_info">
    <div class="mcp_id">Mã MCP: ${mcp[0].name}</div>
    <div class="mcp_addr">Trạng thái: ${mcp[0].status}</div>
    <div class="mcp_troller">Phương tiện: ${mcp[0].vehicle}</div>
    </div>
    ${mcp[0].map}`
    info.innerHTML = html

    for(var btn of actionBtns)
        if(!btn.classList.contains('none'))
            btn.classList.add('none')

    if(active.classList.contains('processing'))
        checkoutBtn.classList.remove('none')
    else if(active.classList.contains('finished')) {
        doneBtn.classList.remove('none')
    }
    else checkinBtn.classList.remove('none')
})

nullBtn.addEventListener('click', () => {
    info.innerHTML = storeInfo
})

checkinBtn.addEventListener('click', () => {
    active.classList.add('processing')
})

checkoutBtn.addEventListener('click', () => {
    active.classList.remove('processing')
    active.classList.add('finished')
})
