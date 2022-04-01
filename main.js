const axios = require("axios")

const config = { headers: {
    authorizaion: "OTU5NTQxNzIxODc4OTA4OTI4.YkdY3Q.ksgqyEhpWLA5l3dMCnPgg3sU5yc",
    "content-type": "application/json"
}}

async function getDog(amountOfDog) {
    const dog = await axios.get(`http://shibe.online/api/shibes?count=${amountOfDog}&urls=true&httpsUrls=true`)

    return dog.data[0]
}

async function postDog(dog) {
    const post = await axios.post("https://discord.com/api/v9/channels/959542558747422770/messages", {
        content: dog
    }, config)
}

const startup = async() => {
    let dog = await axios.get(`http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true`)

    dog = dog.data[0]

    console.log(dog)
    //await new Promise(r => setTimeout(r, 2000));
    try {
    const post = await axios.post("https://discord.com/api/v9/channels/959542558747422770/messages", {
        content: dog
    }, config)
    } catch(err) {console.log(err)}
}

startup()