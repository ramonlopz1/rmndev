
export default function UploadProject(): JSX.Element {


    const postMongoDB = () => {
        fetch('/api/projects', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                
            })
        })
    }

    return (
        <form>
            <input type="text" name="" id="" />
            <input type="submit" onClick={postMongoDB} />
        </form>
    )
}


`{
    "_id":"63a0c0d4c6ba4f10b3515906",
    "name":"Codificador de Textos",
    "filter":"old",
    "technologies":[
        {"_id":"63c84e903c5187777ad29226","name":"HTML5"},
        {"_id":"63c84e903c5187777ad29227","name":"CSS3"},
        {"_id":"63c84e903c5187777ad29228","name":"JAVASCRIPT"
    }],
    "uri":"https://google.com",
    "img":"https:imgur.com.br",
    "type":"web"}`