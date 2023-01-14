// fzr query no mongodb
export default async function getUser() {
    const data = await fetch(`https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/${process.env.ORACLEKEY}/n/grqirxixoznn/b/nathandistribuidora/o/users.json`)
    const pack = await data.json()
    return pack
}

