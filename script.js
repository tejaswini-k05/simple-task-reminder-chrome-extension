async function fetchData() {
    reminderList = [
        `Have breakfast?`,
        `Make your bed`,
        `Meditation`,
        `Wake up`,
        `Exercise`,
        `Lunch`,
        `Dinner`,
        `Stretch`,
        `Take a shower`,
        `Brush teeth`,
        `Drink water`,
        `Set a SMART Goal`,
        `Clean your desk`,
        `Look into the to-do list`,
        `Check your emails`,
        `Complete project tasks for the day`,
        `Journal`,
        `Meditate by taking deep breaths`,
        `Read`,
        `Sleep`,
        `Take short breaks`,
        `Work`,
        `Decide once on simple routines`
    ]

    var randomItem = Math.floor(Math.random()*reminderList.length);
    document.getElementById("tasks").innerHTML = reminderList[randomItem]

}

fetchData();