export default function postImg(data: any) {
  return fetch("/api/uploadImg", {
    method: "POST",
    body: data.formData
  }).then(res => console.log(res));
}
